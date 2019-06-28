import { connect } from 'react-redux';
import Profile from '../screens/Profile';
import { updateUser,getUser,clearData } from './../actions/user.action';

const mapStateToProps = state => {
	return {
	
		userData: state.user.userData,
		updateUserLoading: state.user.updateUserLoading,
		updateUserError: state.user.updateUserError,
		updateUserStatus: state.user.updateUserStatus,

		getUserLoading: state.user.getUserLoading,
		getUserError: state.user.getUserError,
        getUserStatus: state.user.getUserStatus,
        getUserType:state.user.getUserType
	};
};

const mapDispatchToProps = dispatch => {
	return {
		updateUser: (payload,userId) => {
			dispatch(updateUser(payload,userId));
        },
        getUser: userId=>{
            dispatch(getUser(userId))
        },

        clearData:()=>{
            dispatch(clearData())
        }
	};
};

const ProfileContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Profile);
export default ProfileContainer;