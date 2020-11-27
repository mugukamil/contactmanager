import React, { useContext, useState } from "react";
import { Context } from "../../Context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import useInput from "../hooks/useInput";

export default function AddContact(props) {
  const store = useContext(Context);
  const { dispatch } = store;
  const { value: name, reset: resetName, bind: bindName } = useInput("");
  const { value: phone, reset: resetPhone, bind: bindPhone } = useInput("");
  const { value: email, reset: resetEmail, bind: bindEmail } = useInput("");
  const [errors, setErrors] = useState({});

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

    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users/",
      {
        name,
        phone,
        email,
      }
    );

    dispatch({
      type: "ADD_CONTACT",
      payload: data,
    });

    resetName();
    resetPhone();
    resetEmail();
    setErrors({});
    props.history.push("/");
  };

  return (
    <div className="card mb-3">
      <div className="card-header">Add Contact</div>
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
          Add Contact
        </button>
      </form>
    </div>
  );
}
