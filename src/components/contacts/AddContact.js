import React, { Component } from "react";

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };

  onChange = (evt) => this.setState({ [evt.target.name]: evt.target.value });

  onSubmit = (evt) => {
    evt.preventDefault();
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <form className="card-body" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Enter name"
              value={name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              value={email}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-control form-control-lg"
              placeholder="Enter phone"
              value={phone}
              onChange={this.onChange}
            />
          </div>
          <button type="submit" className="btn btn-light btn-block">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
