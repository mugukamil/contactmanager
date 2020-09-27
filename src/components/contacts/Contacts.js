import React from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends React.Component {
  render() {
    return (
      <Consumer>
        {({ contacts }) =>
          contacts.map((c) => <Contact key={c.id} contact={c}></Contact>)
        }
      </Consumer>
    );
  }
}

export default Contacts;
