//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Input from './../components/Input';
import colors from '../utils/colors';
import PropTypes from 'prop-types';
// create a component
class TaskDetails extends Component {
	static navigationOptions = {
		header: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			data: props.navigation.state.params.item,
			taskDescription: props.navigation.state.params.item.description,
			taskName: props.navigation.state.params.item.name,
			location: props.navigation.state.params.item.location,
			userId: props.navigation.state.params.item.userId,
			taskId: props.navigation.state.params.item._id,
		};
	}

	componentWillReceiveProps(nextProps) {
        if ((nextProps.taskUpdateType === 'UPDATE_TASK_SUCCESS' && nextProps.taskUpdateStatus === 'success')
            ||(nextProps.taskDeletedType === 'DELETE_TASK_SUCCESS' && nextProps.taskDeletedStatus === 'success')
    ) {
			const { goBack } = this.props.navigation;
			goBack();
		}
	}
	submitButton = () => {
		if (
			this.state.taskName.trim().length > 0 &&
			this.state.taskDescription.trim().length > 0 &&
			this.state.location.trim().length > 0
		) {
			let payload = {
				name: this.state.taskName,
				description: this.state.taskDescription,
				location: this.state.location,
				userId: this.state.userId,
			};
			this.props.updateTask(payload, this.state.taskId);
		} else {
			Alert.alert('All fields are requried.');
		}
	};

	cancelButton = () => {
		this.props.deleteTask(this.state.taskId);
	};
	render() {
		return (
			<View style={styles.container}>
				<View style={{ height: 50, width: '100%', backgroundColor: '#2F4F4F' }} />
				<View style={{ width: '100%', padding: 10, marginTop: 10 }}>
					<Input
						value={this.state.taskName}
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
						value={this.state.taskDescription}
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
						value={this.state.location}
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
						width: '95%',
						padding: 10,
						justifyContent: 'center',
						alignItems: 'center',
						flex: 1,
						flexDirection: 'row',
						marginHorizontal: 5,
					}}
				>
					<TouchableOpacity onPress={() => this.submitButton()}>
						<Text
							style={{
								color: '#ffffff',
								backgroundColor: '#1a237e',
								paddingHorizontal: 75,
								paddingVertical: 15,
								marginHorizontal: 2,
							}}
						>
							Edit and Save
						</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.cancelButton()}>
						<Text
							style={{
								color: '#ffffff',
								backgroundColor: '#1a237e',
								paddingHorizontal: 75,
								paddingVertical: 15,
								marginHorizontal: 2,
							}}
						>
							Delete
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
export default TaskDetails;

TaskDetails.propTpes = {
	updateTask: PropTypes.func,
	taskUpdateResult: PropTypes.any,
	taskUpdateLoading: PropTypes.bool,
	taskUpdateStatus: PropTypes.string,
	taskUpdateType: PropTypes.string,
    taskUpdateType: PropTypes.string,
    deleteTask: PropTypes.func,
    taskDeletedResult: PropTypes.any,
    taskDeletedLoading: PropTypes.bool,
    taskDeletedStatus: PropTypes.string,
    taskDeletedType: PropTypes.string,
};
