import { SUCCESS, REQUESTING, ERROR } from './constants.action';

export const GET_TASK_LIST_REQUEST = 'GET_TASK_LIST_REQUEST';
export const GET_TASK_LIST_SUCCESS = 'GET_TASK_LIST_SUCCESS';
export const GET_TASK_LIST_FAILURE = 'GET_TASK_LIST_FAILURE';

export const CREATE_TASK_REQUEST = 'CREATE_TASK_REQUEST';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';
export const CREATE_TASK_FAILURE = 'CREATE_TASK_FAILURE';

export const UPDATE_TASK_REQUEST = 'UPDATE_TASK_REQUEST';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_FAILURE';

export const DELETE_TASK_REQUEST = 'DELETE_TASK_REQUEST';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';
export function getCenterListRequest() {
	return {
		type: GET_TASK_LIST_REQUEST,
		status: REQUESTING,
	};
}

export function getCenterListSuccess(taskListResult) {
	return {
		type: GET_TASK_LIST_SUCCESS,
		status: SUCCESS,
		taskListResult,
	};
}

export function getCenterListFailure(error) {
	return {
		type: GET_TASK_LIST_FAILURE,
		status: ERROR,
		error,
	};
}

export function getTaskList() {
	return async (dispatch, getState, api) => {
		dispatch(getCenterListRequest());
		try {
			console.log('irshad');

			const result = await api.get('tasks');
			console.log('result', result);
			const resultJson = await result.json();
			if (result.errorCode > 400) {
				throw new Error(`[${result.errorCode}] ${resultJson.error.errorMessage}`);
			} else {
				//Toast.show("Api Call Sucess");
			}

			console.log('tasks list ', resultJson);
			dispatch(getCenterListSuccess(resultJson));
		} catch (e) {
			console.log('In CATCH BLOCK-->' + e.message);
			dispatch(getCenterListFailure(e.message));
		}
	};
}

//===============================CREATE TASK========================//

export function createTaskRequest() {
	return {
		type: CREATE_TASK_REQUEST,
		status: REQUESTING,
	};
}

export function createTaskSuccess(taskCreateResult) {
	return {
		type: CREATE_TASK_SUCCESS,
		status: SUCCESS,
		taskCreateResult,
	};
}

export function createTaskFailure(error) {
	return {
		type: CREATE_TASK_FAILURE,
		status: ERROR,
		error,
	};
}

export function createTask(payload) {
	return async (dispatch, getState, api) => {
		dispatch(createTaskRequest());
		try {
			console.log('irshad');

			const result = await api.post('task', payload);
			console.log('result', result);
			const resultJson = await result.json();
			if (result.errorCode > 400) {
				throw new Error(`[${result.errorCode}] ${resultJson.error.errorMessage}`);
			} else {
				//Toast.show("Api Call Sucess");
			}

			console.log('createTask', resultJson);
			dispatch(createTaskSuccess(resultJson));
		} catch (e) {
			console.log('In CATCH BLOCK-->' + e.message);
			dispatch(createTaskFailure(e.message));
		}
	};
}
//============= Update Task ================//

export function updateTaskRequest() {
	return {
		type: UPDATE_TASK_REQUEST,
		status: REQUESTING,
	};
}

export function updateTaskSuccess(updateResult) {
	return {
		type: UPDATE_TASK_SUCCESS,
		status: SUCCESS,
		updateResult,
	};
}

export function updateTaskFailure(error) {
	return {
		type: UPDATE_TASK_FAILURE,
		status: ERROR,
		error,
	};
}

export function updateTask(payload,taskId) {
	return async (dispatch, getState, api) => {
		dispatch(updateTaskRequest());
		try {
			console.log('irshad');

			const result = await api.put(`task/${taskId}`, payload);
			console.log('result', result);
			const resultJson = await result.json();
			if (result.errorCode > 400) {
				throw new Error(`[${result.errorCode}] ${resultJson.error.errorMessage}`);
			} else {
				//Toast.show("Api Call Sucess");
			}

			console.log('createTask', resultJson);
			dispatch(updateTaskSuccess(resultJson));
		} catch (e) {
			console.log('In CATCH BLOCK-->' + e.message);
			dispatch(updateTaskFailure(e.message));
		}
	};
}


//============= Dalete Task ===============//

export function deleteTaskRequest() {
	return {
		type: DELETE_TASK_REQUEST,
		status: REQUESTING,
	};
}

export function deleteTaskSuccess(updateResult) {
	return {
		type: DELETE_TASK_SUCCESS,
		status: SUCCESS,
		updateResult,
	};
}

export function deleteTaskFailure(error) {
	return {
		type: DELETE_TASK_FAILURE,
		status: ERROR,
		error,
	};
}

export function deleteTask(taskId) {
	return async (dispatch, getState, api) => {
		dispatch(deleteTaskRequest());
		try {
			console.log('irshad');

			const result = await api.patch(`task/${taskId}`);
			console.log('result', result);
			const resultJson = await result.json();
			if (result.errorCode > 400) {
				throw new Error(`[${result.errorCode}] ${resultJson.error.errorMessage}`);
			} else {
				//Toast.show("Api Call Sucess");
			}

			console.log('createTask', resultJson);
			dispatch(deleteTaskSuccess(resultJson));
		} catch (e) {
			console.log('In CATCH BLOCK-->' + e.message);
			dispatch(deleteTaskFailure(e.message));
		}
	};
}