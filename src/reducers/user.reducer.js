import * as userAction from '../actions/user.action';

const user = (
	state = {
		userData: null,
		updateUserLoading: false,
		updateUserError: null,
        updateUserStatus: '',
        updateUserType:"",

		getUserLoading: false,
		getUserError: null,
        getUserStatus: '',
        getUserType:""

	},
	action
) => {
	switch (action.type) {
		//Reducers for get tasklist
		case userAction.UPDATE_USER_REQUEST:
			return Object.assign({}, state, {
				updateUserLoading: true,
				updateUserStatus: action.status,
			});
		case userAction.UPDATE_USER_SUCCESS: {
			return Object.assign({}, state, {
				userData: action.updateUser,
				updateUserLoading: false,
                updateUserStatus: action.status,
                updateUserType:userAction.UPDATE_USER_SUCCESS
			});
		}
		case userAction.UPDATE_USER_FAILURE:
			return Object.assign({}, state, {
				updateUserError: action.error,
				updateUserLoading: false,
				getUserStatus: action.status,
			});

            case userAction.GET_USER_REQUEST:
			return Object.assign({}, state, {
				getUserLoading: true,
				getUserStatus: action.status,
			});
		case userAction.GET_USER_SUCCESS: {
			return Object.assign({}, state, {
				userData: action.userObj,
				getUserLoading: false,
                getUserStatus: action.status,
                getUserType:userAction.GET_USER_SUCCESS
			});
		}
		case userAction.GET_USER_FAILURE:
			return Object.assign({}, state, {
				getUserError: action.error,
				getUserLoading: false,
				getUserStatus: action.status,
            });
            
        case userAction.GET_USER_FAILURE:{
            return Object.assign({}, state, {
				updateUserStatus: "",
                updateUserType:"",
                getUserStatus: "",
				getUserType:""
            }); 
        }
		default:
			return state;
	}
};
export default user;
