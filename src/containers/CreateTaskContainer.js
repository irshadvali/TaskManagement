import { connect } from 'react-redux';
import CreateTask from '../screens/CreateTask';
import { createTask } from './../actions/task.action';

const mapStateToProps = state => {
	return {
		taskCreateResult: state.task.taskCreateResult,
		taskCreateLoading: state.task.taskCreateLoading,
		taskCreateStatus: state.task.taskCreateStatus,
		taskCreateError: state.task.taskCreateError,
		type: state.task.type,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createTask: payload => {
			dispatch(createTask(payload));
		},
	};
};

const CreateTaskContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateTask);
export default CreateTaskContainer;
