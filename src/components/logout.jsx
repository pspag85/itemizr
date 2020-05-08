import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../store';

const Logout = ({name, handleClick}) => (
  <div id="logout-btn-container">
    <div className="logout-btn" onClick={handleClick}>
      Logout {name}
    </div>
  </div>
);

const mapDispatchToProps = (dispatch, ownProps) => ({
  async handleClick() {
    try {
      await dispatch(logout());
    } catch (err) {
      console.error(err);
    }
  },
});

export default connect(null, mapDispatchToProps)(Logout);
