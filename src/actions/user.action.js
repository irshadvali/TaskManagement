import { SUCCESS, REQUESTING, ERROR } from './constants.action';


export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';


export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA';
//===============================UPDATE USER========================//

export function updateUserRequest() {
	return {
		type: UPDATE_USER_REQUEST,
		status: REQUESTING,
	};
}

export function updateUserSuccess(updateUser) {
	return {
		type: UPDATE_USER_SUCCESS,
		status: SUCCESS,
		updateUser,
	};
}

export function updateUserFailure(error) {
	return {
		type: UPDATE_USER_FAILURE,
		status: ERROR,
		error,
	};
}

export function updateUser(payload,userId) {
	return async (dispatch, getState, api) => {
		dispatch(updateUserRequest());
		try {
			const result = await api.put(`user/${userId}`, payload);
			const resultJson = await result.json();
			if (result.errorCode > 400) {
				throw new Error(`[${result.errorCode}] ${resultJson.error.errorMessage}`);
			} 
			dispatch(updateUserSuccess(resultJson));
		} catch (e) {
			dispatch(updateUserFailure(e.message));
		}
	};
}
//=============== get user ================//

export function getUserRequest() {
	return {
		type: GET_USER_REQUEST,
		status: REQUESTING,
	};
}

export function getUserSuccess(userObj) {
	return {
		type: GET_USER_SUCCESS,
		status: SUCCESS,
		userObj,
	};
}

export function getUserFailure(error) {
	return {
		type: GET_USER_FAILURE,
		status: ERROR,
		error,
	};
}

export function getUser(userId) {
	return async (dispatch, getState, api) => {
		dispatch(getUserRequest());
		try {
			const result = await api.get(`user/${userId}`);
			const resultJson = await result.json();
			if (result.errorCode > 400) {
				throw new Error(`[${result.errorCode}] ${resultJson.error.errorMessage}`);
			} 
			dispatch(getUserSuccess(resultJson));
		} catch (e) {
			dispatch(getUserFailure(e.message));
		}
	};
}
export function clearUserData(){
    return{type: GET_USER_FAILURE};
      
}

export function clearData(){
    dispatch(clearUserData(resultJson));
}