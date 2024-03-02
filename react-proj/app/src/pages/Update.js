import React from "react";
import UserUpdateForm from "../components/UpdationForm";

export default function UpdatePage() {
  const initialUserData = {
    name: "John Doe",
    email: "john.doe@example.com",
  };
  const handleUserUpdate = (updatedData) => {
    console.log('Updated user data:', updatedData);
    <>
    <h2>Update User</h2><UserUpdateForm
          initialUserData={initialUserData}
          onSubmit={handleUserUpdate} /></>
  };
  return <div>Update</div>;
}
