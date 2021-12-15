import React, { useState, useEffect } from "react";
import Form from './Form';

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

    axios
      .post("fakeapi.com", newMember)
      .then((res) => {
        const newMembers = [...members, newMember];
        setMembers(newMembers);
      })
      .catch((err) => console.log(err));
    //  d) also on success clear the form
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    axios.get("fakeapi.com").then((res) => setMembers(res.data));
  }, []);

    return (
      <div className="container">
        <h1>Team Member App</h1>
        <Form formValues={formValues} update={updateForm} submit={submitForm} />
      </div>
    );
  };
}
