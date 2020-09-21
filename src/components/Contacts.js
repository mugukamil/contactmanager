import React from "react";
import Contact from "./Contact";

class Contacts extends React.Component {
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
  };
  render() {
    const { contacts } = this.state;
    return contacts.map((c) => (
      <Contact key={c.id} contact={c} email={c.email} phone={c.phone}></Contact>
    ));
  }
}

export default Contacts;
