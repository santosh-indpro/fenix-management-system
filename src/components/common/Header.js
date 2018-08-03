import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionMaster from '../../actions/uiAction';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {}

  render() {
    return (
      <nav className="navbar navbar-inverse navlook">
        <div className="container">
          <div className="navbar-header" />
          <form className="navbar-form navbar-left">
            <div>
              <div className="form-group">
                {/* <input type="text" className="form-control" onChange={this.handleFilter} placeholder="Search"/>*/}
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link className="btn btn-info btn-lg sortButton" to="/about-us">
                About
              </Link>
              <Link className="btn btn-info btn-lg sortButton" to="/Page2">
                Page2
              </Link>
              <Link className="btn btn-info btn-lg sortButton" to="/Page3">
                Page3
              </Link>
              <Link className="btn btn-info btn-lg sortButton" to="/Page4">
                Page4
              </Link>
              <Link
                className="btn btn-info btn-lg sortButton"
                to="/ProductForm">
                <span className="glyphicon glyphicon-plus">Add</span>
              </Link>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state.application;
}

function mapDispatchToProps(dispatch) {
  return {
    actionMaster: bindActionCreators(actionMaster, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
