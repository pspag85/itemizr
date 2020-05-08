import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import history from './history';
import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import store, {getMe} from './store';
import PublicRoutes from './public-routes';
import Routes from './routes';
import './css/app.css';

class App extends Component {
  async componentDidMount() {
    try {
      await store.dispatch(getMe());
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const {isLoggedIn} = this.props;
    return !isLoggedIn ? <PublicRoutes /> : <Routes />;
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  loadInitialData() {
    dispatch(getMe());
  },
});

const connectedApp = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(App)
);

export default hot(module)(connectedApp);
