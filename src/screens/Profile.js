//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert,ToastAndroid } from 'react-native';
import Input from './../components/Input';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
// create a component
class Profile extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mobileNumber: '',
			email: '',
			adhaar: '',
			userId: '5d13b89918dce705ab724f76',
		};
	}

	componentDidMount() {
		this.props.getUser(this.state.userId);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.getUserType === 'GET_USER_SUCCESS' && nextProps.getUserStatus === 'success') {
	
			this.setState({
				name: nextProps.userData.name,
				mobileNumber: nextProps.userData.mobileNumber.toString(),
				email: nextProps.userData.email,
				adhaar: nextProps.userData.adhaar,
			});
        }
        
        if (nextProps.updateUserType === 'UPDATE_USER_SUCCESS' && nextProps.updateUserStatus === 'success') {
           
            ToastAndroid.showWithGravity(
                'User data updated',
                ToastAndroid.SHORT,
                ToastAndroid.CENTER,
              );
            this.props.getUser(this.state.userId);
        }
	}
	submitButton = () => {
		if (
			this.state.name.trim().length > 0 &&
			this.state.mobileNumber.trim().length > 0 &&
			this.state.email.trim().length > 0 &&
			this.state.adhaar.trim().length > 0
		) {
			let payload = {
				name: this.state.name,
				mobileNumber: parseInt(this.state.mobileNumber),
				email: this.state.email,
				adhaar: this.state.adhaar,
			};
			this.props.updateUser(payload,this.state.userId);
		} else {
			Alert.alert('All fields are requried.');
		}
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={{ width: '100%', padding: 10, marginTop: 10 }}>
					<Input
						value={this.state.name}
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="Name"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ name: val })}
					/>
				</View>
				<View style={{ width: '100%', padding: 10 }}>
					<Input
						value={this.state.mobileNumber}
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="Mobile number"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ mobileNumber: val })}
					/>
				</View>
				<View style={{ width: '100%', padding: 10 }}>
					<Input
						value={this.state.email}
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="email Id"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ email: val })}
					/>
				</View>
				<View style={{ width: '100%', padding: 10 }}>
					<Input
						value={this.state.adhaar}
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="Adhaar Number"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ adhaar: val })}
					/>
				</View>
				<View
					style={{
						height: 50,
						width: '100%',
						padding: 10,
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: 30,
					}}
				>
					<TouchableOpacity onPress={() => this.submitButton()}>
						<Text
							style={{
								color: '#ffffff',
								backgroundColor: '#1a237e',
								paddingHorizontal: 100,
								paddingVertical: 15,
							}}
						>
							Edit and Save
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

// define your styles
const styles = StyleSheet.create({
	container: {
		flex: 1,

		backgroundColor: '#ffffff',
	},
	borderContainer: {
		backgroundColor: colors.containerBackgroundColor,
		flexDirection: 'row',
		paddingHorizontal: 10,

		alignItems: 'center',
		borderRadius: 3,
	},
	input: {
		fontSize: 14,
		padding: 10,
		color: colors.defaultTextColor,
	},
});

//make this component available to the app
export default Profile;

Profile.propTpes = {
	updateUser: PropTypes.func,
	getUser: PropTypes.func,
	userData: PropTypes.any,
	updateUserLoading: PropTypes.bool,
	updateUserError: PropTypes.string,
	updateUserStatus: PropTypes.string,
    clearData: PropTypes.func,
	getUserLoading: PropTypes.bool,
	getUserError: PropTypes.string,
	getUserStatus: PropTypes.string,
};
