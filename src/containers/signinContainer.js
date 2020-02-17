import { connect } from 'react-redux';
import SignIn from 'components/SignIn';
import actions from 'redux/actions';

function mapStateToProps() {
  return {
    // fullName: state.user.name,
    // userImage: state.user.profileImage,
    // loggedInTime: state.user.loggedInTime,
  };
}

const mapDispatchToProps = dispatch => ({
  login: () => { dispatch(actions.loginUser()); },
});

const UserInfoContainer = connect(mapStateToProps, mapDispatchToProps)(SignIn);

export default UserInfoContainer;
