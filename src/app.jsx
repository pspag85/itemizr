import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import history from './history';
import {hot} from 'react-hot-loader';
import {connect} from 'react-redux';
import store, {getMe} from './store';
import Navbar from './components/navbar';
import Routes from './routes';
import './css/app.css';

class App extends Component {
  componentDidMount() {
    const {
      history,
      location,
      loadInitialData,
      isLoggedIn
    } = this.props
    const {pathname} = location
    let path = pathname === '/' ? '/products' : pathname
    loadInitialData();
    path = !isLoggedIn ? '/login' : path
    history.push(`${path}`)
  }

  render() {
    const {isLoggedIn} = this.props;
    return (
      <Fragment>
        <Navbar isLoggedIn={isLoggedIn} />
        <Routes />
      </Fragment>
    );
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
