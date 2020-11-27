import React, { Fragment, useContext, useEffect } from "react";
import Contact from "./Contact";
import { Context } from "../../Context";
import axios from "axios";

export default function Contacts() {
  const store = useContext(Context);
  const { state, dispatch } = store;

  return (
    <Fragment>
      <h1 className="display-4 mb-2">
        <span className="text-danger">Contact</span> List
      </h1>
      {state.contacts?.map((c) => (
        <Contact key={c.id} contact={c}></Contact>
      ))}
    </Fragment>
  );
}
