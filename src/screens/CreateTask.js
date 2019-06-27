//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Input from './../components/Input';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
// create a component
class CreateTask extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			taskName: '',
			taskDescription: '',
			location: '',
		};
	}

	componentWillReceiveProps(nextProps){
		console.log(nextProps)
		if(nextProps.type==="CREATE_TASK_SUCCESS" &&nextProps.taskCreateStatus==="success"){
			const { goBack } = this.props.navigation;
			goBack();
		}

	}
	submitButton = () => {
		console.log(this.state.taskName, this.state.taskDescription, this.state.location);
		if (
			this.state.taskName.trim().length > 0 &&
			this.state.taskDescription.trim().length > 0 &&
			this.state.location.trim().length > 0
		) {
			console.log('submit button');
			let payload = {
				name: this.state.taskName,
				description: this.state.taskDescription,
				location: this.state.location,
				userId: '5d13b89918dce705ab724f76',
			};
			this.props.createTask(payload);
		} else {
			Alert.alert('All fields are requried.');
		}
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={{ height: 50, width: '100%', backgroundColor: '#2F4F4F' }} />
				<View style={{ width: '100%', padding: 10, marginTop: 10 }}>
					<Input
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="Task Name"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ taskName: val })}
					/>
				</View>
				<View style={{ width: '100%', padding: 10 }}>
					<Input
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="Task description"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ taskDescription: val })}
					/>
				</View>
				<View style={{ width: '100%', padding: 10 }}>
					<Input
						inputContainer={styles.borderContainer}
						style={styles.input}
						placeholder="City Name"
						returnKeyType={'done'}
						autoCapitalize={'sentences'}
						autoCorrect={false}
						placeholderTextColor={colors.placeholderTextColor}
						maxLength={250}
						onChangeText={val => this.setState({ location: val })}
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
							SUBMIT
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
export default CreateTask;

CreateTask.propTpes = {
	createTask: PropTypes.func,
	taskCreateResult: PropTypes.any,
	taskCreateLoading: PropTypes.bool,
	taskCreateError: PropTypes.string,
	taskCreateStatus: PropTypes.string,
	type: PropTypes.string,
};
