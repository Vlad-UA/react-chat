import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import WelcomePageView from '../components/welcomePage/WelcomePageView';
import {signup, login} from '../actions/authenticationActions';

const mapStateToProps = state => ({
  isAuthenticated: state.authentication.isAuthenticated,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomePageView);
