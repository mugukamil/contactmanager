import React, { useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";

const Context = React.createContext();
const { Provider } = Context;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "GET_CONTACTS":
        return { contacts: action.payload };
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
      case "UPDATE_CONTACT":
        return {
          ...state,
          contacts: state.contacts.map((contact) =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
          ),
        };

      default:
        return state;
    }
  }, {});

  useEffect(() => {
    async function fetchContacts() {
      const { data: contacts } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      dispatch({ type: "GET_CONTACTS", payload: contacts });
    }
    fetchContacts();
  }, [dispatch]);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { Context, StateProvider };
