import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  onChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });

  onSubmit = async (dispatch, evt) => {
    evt.preventDefault();
    const { name, email, phone } = this.state;
    if (!name.length) {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }
    if (!email.length) {
      this.setState({ errors: { email: "Name is required" } });
      return;
    }

    if (!phone.length) {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      this.state
    );

    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="card mb-3">
            <div className="card-header">Add Contact</div>
            <form
              className="card-body"
              onSubmit={this.onSubmit.bind(this, dispatch)}
            >
              <TextInputGroup
                label="Name"
                name="name"
                value={name}
                placeholder="Enter name"
                onChange={this.onChange}
                error={errors.name}
              ></TextInputGroup>
              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={this.onChange}
                error={errors.email}
              ></TextInputGroup>
              <TextInputGroup
                label="Phone"
                name="phone"
                type="tel"
                value={phone}
                placeholder="Enter phone"
                onChange={this.onChange}
                error={errors.phone}
              ></TextInputGroup>

              <button type="submit" className="btn btn-light btn-block">
                Add Contact
              </button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default AddContact;
