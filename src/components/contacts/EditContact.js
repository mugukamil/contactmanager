import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import useInput from "../hooks/useInput";

export default function EditContact(props) {
  const store = useContext(Context);
  const { dispatch } = store;
  const {
    value: name,
    setValue: setName,
    reset: resetName,
    bind: bindName,
  } = useInput("");
  const {
    value: phone,
    setValue: setPhone,
    reset: resetPhone,
    bind: bindPhone,
  } = useInput("");
  const {
    value: email,
    setValue: setEmail,
    reset: resetEmail,
    bind: bindEmail,
  } = useInput("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function fetchContact() {
      const { id } = props.match.params;
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      setName(data.name);
      setPhone(data.phone);
      setEmail(data.email);
    }
    fetchContact();
  }, [setName, setPhone, setEmail, props.match.params]);

  const onSubmit = async (evt) => {
    evt.preventDefault();
    if (name === "") {
      setErrors({ ...errors, name: "Name is required" });
      return;
    }

    if (email === "") {
      setErrors({ ...errors, email: "Email is required" });
      return;
    }

    if (phone === "") {
      setErrors({ ...errors, phone: "Phone is required" });
      return;
    }

    const { id } = props.match.params;

    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { name, email, phone }
    );

    dispatch({ type: "UPDATE_CONTACT", payload: res.data });

    resetName();
    resetPhone();
    resetEmail();
    setErrors({});
    props.history.push("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Edit Contact</div>
      <form className="card-body" onSubmit={onSubmit}>
        <TextInputGroup
          label="Name"
          name="name"
          placeholder="Enter name"
          error={errors.name}
          {...bindName}
        ></TextInputGroup>
        <TextInputGroup
          label="Email"
          name="email"
          type="email"
          placeholder="Enter email"
          error={errors.email}
          {...bindEmail}
        ></TextInputGroup>
        <TextInputGroup
          label="Phone"
          name="phone"
          type="tel"
          placeholder="Enter phone"
          error={errors.phone}
          {...bindPhone}
        ></TextInputGroup>

        <button type="submit" className="btn btn-light btn-block">
          Update Contact
        </button>
      </form>
    </div>
  );
}
