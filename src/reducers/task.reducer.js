import * as taskAction from '../actions/task.action';

const task = (
	state = {
		taskList: null,
		taskLoading: false,
		taskError: null,
		isLoggedIn: false,
		taskStatus: '',

		taskCreateResult: null,
		taskCreateLoading: false,
		taskCreateError: null,
		taskCreateStatus: '',
		type: '',

		taskUpdateResult: null,
		taskUpdateLoading: false,
		taskUpdateError: null,
		taskUpdateStatus: '',
    taskUpdateType: '',
    
    taskDeletedResult: null,
		taskDeletedLoading: false,
		taskDeletedError: null,
		taskDeletedStatus: '',
		taskDeletedType: '',
	},
	action
) => {
	switch (action.type) {
		//Reducers for get tasklist
		case taskAction.GET_TASK_LIST_REQUEST:
			return Object.assign({}, state, {
				taskLoading: true,
				taskStatus: action.status,
			});
		case taskAction.GET_TASK_LIST_SUCCESS: {
			console.log(action.taskListResult);
			return Object.assign({}, state, {
				taskList: action.taskListResult,
				taskLoading: false,
				taskStatus: action.status,
			});
		}
		case taskAction.GET_TASK_LIST_FAILURE:
			return Object.assign({}, state, {
				taskError: action.error,
				taskList: null,
				taskLoading: false,
				taskStatus: action.status,
			});
		//Reducers for create task
		case taskAction.CREATE_TASK_REQUEST:
			return Object.assign({}, state, {
				taskCreateLoading: true,
				taskCreateStatus: action.status,
			});
		case taskAction.CREATE_TASK_SUCCESS: {
			console.log(action.taskListResult);
			return Object.assign({}, state, {
				taskCreateResult: action.taskCreateResult,
				taskCreateLoading: false,
				taskCreateStatus: action.status,
				type: taskAction.CREATE_TASK_SUCCESS,
			});
		}
		case taskAction.CREATE_TASK_FAILURE:
			return Object.assign({}, state, {
				taskCreateError: action.error,
				taskCreateLoading: false,
				taskCreateStatus: action.status,
			});

		//Reducers for update task
		case taskAction.UPDATE_TASK_REQUEST:
			return Object.assign({}, state, {
				taskUpdateLoading: true,
				taskUpdateStatus: action.status,
			});
		case taskAction.UPDATE_TASK_SUCCESS: {
			console.log(action.taskListResult);
			return Object.assign({}, state, {
				taskUpdateResult: action.updateResult,
				taskUpdateLoading: false,
				taskUpdateStatus: action.status,
				taskUpdateType: taskAction.UPDATE_TASK_SUCCESS,
			});
		}
		case taskAction.UPDATE_TASK_FAILURE:
			return Object.assign({}, state, {
				taskUpdateError: action.error,
				taskUpdateLoading: false,
				taskUpdateStatus: action.status,
      });
      
      // Reducer for delete task
      case taskAction.DELETE_TASK_REQUEST:
			return Object.assign({}, state, {
				taskDeletedLoading: true,
				taskDeletedStatus: action.status,
			});
		case taskAction.DELETE_TASK_SUCCESS: {
			console.log(action.taskListResult);
			return Object.assign({}, state, {
				taskDeletedResult: action.updateResult,
				taskDeletedLoading: false,
				taskDeletedStatus: action.status,
				taskDeletedType: taskAction.DELETE_TASK_SUCCESS,
			});
		}
		case taskAction.DELETE_TASK_FAILURE:
			return Object.assign({}, state, {
				taskDeletedError: action.error,
				taskDeletedLoading: false,
				taskDeletedStatus: action.status,
      });
		default:
			return state;
	}
};
export default task;
