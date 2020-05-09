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
  async componentDidMount() {
    const {history, location} = this.props
    const {pathname} = location
    let path = pathname === '/' ? '/products' : pathname
    try {
      const user = await store.dispatch(getMe())
      path = !user ? '/login' : path
      history.push(`${path}`)
    } catch(err) {
      console.error(err)
    }
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
