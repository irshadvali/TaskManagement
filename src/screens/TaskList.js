import React, { Component } from 'react';
import { Text, View, Alert, FlatList, ActivityIndicator } from 'react-native';
import {sortByDistance} from '../utils/Utils';
import TaskItem from '../components/TaskItem';
import styles from '../styles/RestaurantListStyles';
import Input from '../components/Input';
import colors from '../utils/colors';
import PropTypes from "prop-types";
import FAB from 'react-native-fab'
 class TaskList extends Component {
	static navigationOptions = {
		header: null,
	};

	constructor(props) {
		super(props);
		this.state = {
            dataResult:[],
		};
	
	}

	componentDidMount() {
				// this.props.getTaskList();
				this.willFocusSubscription = this.props.navigation.addListener(
					"willFocus",
					() => {
						this.props.getTaskList();
					}
				);
	
	}

	componentWillUnmount() {
    this.willFocusSubscription.remove();
  }
	goTo = item => {
		const { navigate } = this.props.navigation;
		navigate('TaskDetailsContainer', { item: item });

    };
    componentWillReceiveProps(nextProps){{
        if(nextProps.taskStatus==="success"){
            this.setState({
                dataResult:nextProps.taskList
            })
        }
    

    }

    }
	renderListView = item => {
		return (
			<View>
				<TaskItem
					taskName={item.name}
					description={item.description}
					location={item.location}
					onPress={() => this.goTo(item)}
				/>
			</View>
		);
	};
	getTaskListByName =(val)=>{
    let text;
    if (val) {
      text = val.toLowerCase();
      let allAdata = this.props.taskList;
      let filteredData = allAdata.filter(item => {
        return item.name.toLowerCase().indexOf(text) > -1;
      });
      if (!Array.isArray(filteredData) && !filteredData.length) {
        this.setState({
			dataResult: []
        });
      } else if (Array.isArray(filteredData)) {
        this.setState({
			dataResult: filteredData
        });
      }
    } else {
      this.setState({
        dataResult: this.props.taskList
      });
    }
    }
    
    createTaskList=()=>{
       
        const { navigate } = this.props.navigation;
			navigate('CreateTaskContainer');

    }
	render() {

		if (this.props.taskLoading) {
			return (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size={'large'} />
					<Text style={styles.loaderText}>Fetching task...</Text>
				</View>
			);
		}
		return (
			<View style={styles.container}>
				<Input
					placeholder="Search by task name"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					placeholderTextColor={colors.placeholderTextColor}
					maxLength={30}
					onChangeText={val => this.getTaskListByName(val)}
				/>
				<FlatList
					contentContainerStyle={{ padding: 5 }}
					data={this.state.dataResult}
					renderItem={({ item }) => this.renderListView(item)}
				/>
                <FAB buttonColor="#2F4F4F"
                iconTextColor="#FFFFFF" 
                onClickAction={() => this.createTaskList()} 
                visible={true} 
                 />
			</View>
		);
	}
}
export default TaskList;
TaskList.propTpes = {
    getTaskList: PropTypes.func,
    taskList: PropTypes.array,
    taskLoading: PropTypes.bool,
    taskStatus: PropTypes.string,
    taskError: PropTypes.string,
  };