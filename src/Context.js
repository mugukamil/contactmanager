import React from "react";
import axios from "axios";

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
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    default:
      return state;
  }
};

export class Provider extends React.Component {
  state = {
    contacts: [],
    dispatch: (action) => this.setState((state) => reducer(this.state, action)),
  };

  async componentDidMount() {
    const { data: contacts } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    this.setState({ contacts });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
