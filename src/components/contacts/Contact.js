import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";

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

  onDeleteClick = async (dispatch, id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (error) {
    } finally {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  render() {
    const { name, email, phone, id } = this.props.contact;
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="card card-body mb-3">
            <h4 style={{ display: "flex" }}>
              {name}{" "}
              <i
                className="fas fa-sort-down"
                onClick={this.onShowClick}
                style={{ cursor: "pointer" }}
              ></i>
              <i
                className="fas fa-times"
                onClick={this.onDeleteClick.bind(this, dispatch, id)}
                style={{ cursor: "pointer", marginLeft: "auto", color: "red" }}
              ></i>
            </h4>
            {this.state.isInfoShown ? (
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">phone: {phone}</li>
              </ul>
            ) : null}
          </div>
        )}
      </Consumer>
    );
  }
}

export default Contact;
