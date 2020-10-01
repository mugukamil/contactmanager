import React, { Component } from "react";

class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = (evt) => {
    evt.preventDefault();
  };

  static defaultProps = {
    name: "john",
    email: "john@doe.com",
    phone: "77-77-77",
  };

  render() {
    const { name, email, phone } = this.props;
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
              defaultValue={name}
              ref={this.nameInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter email"
              defaultValue={email}
              ref={this.emailInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-control form-control-lg"
              placeholder="Enter phone"
              defaultValue={phone}
              ref={this.phoneInput}
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
