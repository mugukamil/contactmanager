import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {({ contacts }) => (
          <>
            <h1 className="display-4 mb-2">
              <span className="text-danger">Contact</span> List
            </h1>
            {contacts.map((c) => (
              <Contact key={c.id} contact={c}></Contact>
            ))}
          </>
        )}
      </Consumer>
    );
  }
}

export default Contacts;
