import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    console.log("Add User Handler");
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">User Name</label>
      <input id="username" type="text"></input>
      <label htmlFor="age">Age</label>
      <input id="age" type="number"></input>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
