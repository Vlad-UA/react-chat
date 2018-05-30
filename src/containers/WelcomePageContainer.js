import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import WelcomePageView from '../components/welcomePage/WelcomePageView';
import {signup, login} from '../actions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

/*
const mapDispatchToProps = dispatch => ({
  signup: (username, password) => dispatch(signup(username, password)),
  login: (username, password) => dispatch(login(username, password)),
});
*/
const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePageView);
