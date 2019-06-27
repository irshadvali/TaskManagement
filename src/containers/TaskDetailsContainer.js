import { connect } from 'react-redux';
import TaskDetails from '../screens/TaskDetails';
import { updateTask,deleteTask } from './../actions/task.action';

const mapStateToProps = state => {
	return {
        taskUpdateResult: state.task.taskUpdateResult,
        taskUpdateLoading: state.task.taskUpdateLoading,
        taskUpdateStatus: state.task.taskUpdateStatus,
        taskUpdateType: state.task.taskUpdateType,
        taskUpdateType: state.task.taskUpdateType,

        taskDeletedResult: state.task.taskDeletedResult,
        taskDeletedLoading: state.task.taskDeletedLoading,
        taskDeletedStatus: state.task.taskDeletedStatus,
        taskDeletedType: state.task.taskDeletedType,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateTask: (payload,taskId) => {
			dispatch(updateTask(payload,taskId));
        },
        deleteTask: (taskId) => {
			dispatch(deleteTask(taskId));
		},
	};
};

const TaskDetailsContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(TaskDetails);
export default TaskDetailsContainer;
