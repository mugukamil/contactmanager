import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
  };

  state = {
    isInfoShown: false,
  };

  onShowClick = () => {
    this.setState({ isInfoShown: !this.state.isInfoShown });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name} <i className="fas fa-sort-down" onClick={this.onShowClick}></i>
        </h4>
        {this.state.isInfoShown ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default Contact;
