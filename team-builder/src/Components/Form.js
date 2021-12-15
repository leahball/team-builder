import React from "react";

export default function Form(props) {
  const { formValues, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Username
          <input
            type="text"
            value={formValues.username}
            name="username"
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role
          <select name="role" onChange={onChange} value={formValues.role}>
            <option>--Please chose an option--</option>
            <option>Magician</option>
            <option>Wizard</option>
            <option>Sorceress</option>
          </select>
        </label>
        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
