import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Contact(props) {
  const store = useContext(Context);
  const { dispatch } = store;
  const [isInfoShown, setIsInfoShown] = useState(false);

  const onShowClick = () => {
    setIsInfoShown(!isInfoShown);
  };

  const onDeleteClick = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    } catch (error) {
    } finally {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  const { name, email, phone, id } = props.contact;
  return (
    <div className="card card-body mb-3">
      <h4 style={{ display: "flex" }}>
        {name}{" "}
        <i
          className="fas fa-sort-down"
          onClick={onShowClick}
          style={{ cursor: "pointer" }}
        ></i>
        <Link
          to={`contact/edit/${id}`}
          style={{
            cursor: "pointer",
            marginLeft: "auto",
            marginRight: "1em",
          }}
        >
          <i className="fas fa-pencil-alt"></i>
        </Link>
        <i
          className="fas fa-times"
          onClick={() => onDeleteClick(id)}
          style={{ cursor: "pointer", color: "red" }}
        ></i>
      </h4>
      {isInfoShown ? (
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">phone: {phone}</li>
        </ul>
      ) : null}
    </div>
  );
}
