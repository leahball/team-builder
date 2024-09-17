import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from "axios";

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};

export default function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    const newFormValues = { ...formValues, [inputName]: inputValue };
    setFormValues(newFormValues);
  };

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    setMembers([...members, newMember]);
  };

  return (
    <div className="container">
      <h1>Team Member App</h1>
      <Form formValues={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}
