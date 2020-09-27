import React from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "john doe",
        email: "john@doe.com",
        phone: "111111",
      },
      {
        id: 2,
        name: "jane",
        email: "jane@doe.com",
        phone: "888888",
      },
      {
        id: 3,
        name: "henry doe",
        email: "henry@doe.com",
        phone: "333333",
      },
    ],
    dispatch: (action) => this.setState((state) => reducer(this.state, action)),
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
