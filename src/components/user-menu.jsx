import React, {Component} from 'react';
import {connect} from 'react-redux';
import Logout from './logout';
import '../css/user-menu.css';

class UserMenu extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    const open = !this.state.open;
    this.setState({
      open,
    });
  };

  render() {
    const {handleClick} = this;
    const {open} = this.state;
    const {business} = this.props.user;
    return (
      <div
        id="user-menu"
        className="flex ctr-items bg-blue ft-20 pointer"
        onClick={handleClick}
      >
        <div id="user-menu--btn">
          <h4>{business}</h4>
        </div>
        {open ? (
          <div id="user-menu--dd" className="bg-drk-blue">
            <Logout />
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({user});

export default connect(mapStateToProps, null)(UserMenu);
