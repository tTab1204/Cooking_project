import React, { useState } from "react";
import { message } from "antd";
import ListYourKitchenPresenter from "./ListYourKitchenPresenter";

function ListYourKitchenContainer() {
  const [, setName] = useState("");
  const [, setEmail] = useState("");
  const [, setLookingTo] = useState("");
  const [ShowSuccess, setShowSuccess] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onLookingToChange = (label) => {
    console.log(label.key);
    setLookingTo(label.key);
  };

  const successMessage = () => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });

    setTimeout(() => {
      message.success({
        content: "Success!",
        key,
        duration: 2,
      });
      setShowSuccess(true);
    }, 2000);
  };

  const onSubmit = () => {
    successMessage();
  };

  return (
    <>
      <ListYourKitchenPresenter
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onLookingToChange={onLookingToChange}
        onSubmit={onSubmit}
        ShowSuccess={ShowSuccess}
      />
    </>
  );
}

export default ListYourKitchenContainer;
