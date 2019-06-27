import React, { Component } from 'react';
import { Text, View, Alert, FlatList, ActivityIndicator } from 'react-native';
import {sortByDistance} from '../utils/Utils';
import DataItem from '../components/DataItem';
import styles from '../styles/RestaurantListStyles';
import Input from '../components/Input';
import colors from '../utils/colors';
export default class RestaurantList extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
			location: null,
			locationDetails: null,
			lat: null,
			lng: null,
			data: null,
			loader: true,
			restaurantList:[]
		};
		this.findCoordinates();
	}
	findCoordinates = async () => {
		await navigator.geolocation.getCurrentPosition(
			position => {
				console.log('LAT,LNG', position.coords.latitude, position.coords.longitude);
				this.setState({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 50000, maximumAge: 1000 }
		);
	};
	componentDidMount() {
		let tempArray = [];
		fetch('http://www.mocky.io/v2/5ac4842c2f00005600f5f9fb', {
			method: 'GET',
		})
			.then(response => response.json())
			.then(responseJson => {
				console.log('RESPONSE', responseJson);
				responseJson.restaurantList.forEach(function(element) {
					element.latitude = element.location.latitude;
					element.longitude = element.location.longitude;
					tempArray.push(element);
				});
				this.setState({ loader: false });
				const opts = {
					yName: 'latitude',
					xName: 'longitude',
				};

				const origin = {
					longitude: this.state.lng || 77.61808819,
					latitude: this.state.lat || 12.93369625,
				};
				let sortDis = sortByDistance(origin, tempArray, opts);
				console.log('sortDis', sortDis);

				this.setState({
					data: sortDis,
					restaurantList:sortDis
				});
			})
			.catch(error => {
				console.error(error);
			});
	}
	goTo = item => {
		const { navigate } = this.props.navigation;
		if (item.menu_list) {
			navigate('DetailsScreen', { item: item });
		} else {
			alert('Currently Details are unavailable, /n Please choose another restaurant!!!');
		}
	};
	renderListView = item => {
		return (
			<View>
				<DataItem
					imageSource={item.image_url}
					shopName={item.name}
					contact={item.contact}
					distance={item.distance}
					onPress={() => this.goTo(item)}
				/>
			</View>
		);
	};
	getRestaurantName =(val)=>{

let text;
    if (val) {
      text = val.toLowerCase();
      let allAdata = this.state.data;
      let filteredData = allAdata.filter(item => {
        return item.name.toLowerCase().indexOf(text) > -1;
      });
      if (!Array.isArray(filteredData) && !filteredData.length) {
        this.setState({
			restaurantList: []
        });
      } else if (Array.isArray(filteredData)) {
        this.setState({
			restaurantList: filteredData
        });
      }
    } else {
      this.setState({
        restaurantList: this.state.data
      });
    }
	}
	render() {
		if (this.props.restaurantList) {
			console.log('PROPSLIST', this.props.restaurantList);
		}
		if (this.state.loader) {
			return (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size={'large'} />
					<Text style={styles.loaderText}>Fetching user location...</Text>
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<Input
					placeholder="Search by name"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					placeholderTextColor={colors.placeholderTextColor}
					maxLength={30}
					onChangeText={val => this.getRestaurantName(val)}
				/>
				<FlatList
					contentContainerStyle={{ padding: 5 }}
					data={this.state.restaurantList}
					renderItem={({ item }) => this.renderListView(item)}
				/>
			</View>
		);
	}
}
