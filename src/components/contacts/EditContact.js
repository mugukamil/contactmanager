import React, { Component } from "react";
import { Consumer } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";

class EditContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {},
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    this.setState({ name: data.name, email: data.email, phone: data.phone });
  }

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

    const { id } = this.props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { name, email, phone }
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    this.setState({ name: "", email: "", phone: "", errors: {} });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {({ dispatch }) => (
          <div className="card mb-3">
            <div className="card-header">Edit Contact</div>
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
                Update Contact
              </button>
            </form>
          </div>
        )}
      </Consumer>
    );
  }
}

export default EditContact;
