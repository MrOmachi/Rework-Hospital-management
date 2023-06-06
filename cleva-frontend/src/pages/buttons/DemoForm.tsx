import React from "react";
import Input from "../../components/input/Input";
import Select from "../../components/Layout/inputs/Select";
import Modal from "../../components/PopUps/Modal";

function DemoForm() {

  const handleDelet = () => {
    console.log(handleDelet);
  };

  const arr = [
    {
      title: "hello",
      type: "text",
      fn: handleDelet,
      text: "hello"
    },
    {
      title: "hello",
      type: "text",
      fn: handleDelet,
      text: "hello"
    },
    {
      title: "hello",
      type: "text",
      fn: handleDelet,
      text: "hello"
    },
    {
      title: "hello",
      type: "number",
      fn: handleDelet,
      text: ".ldfskjbgf;sk"
    },
    {
      title: "hello",
      type: "password",
      fn: handleDelet,
      text: "hello"
    },
    {
      title: "hello",
      type: "email",
      fn: handleDelet,
      text: "hello"
    },
    {
      title: "hello",
      type: "text",
      fn: handleDelet,
      text: "hello"
    },
  ]

  const myArr = [
    {
      value: "hellor",
      label: "tell me your name"
    },
    {
      value: "hellor",
      label: "tell me your name"
    },
    {
      value: "hellor",
      label: "tell me your name"
    },
    {
      value: "hellor",
      label: "tell me your name"
    },
  ]

  return (
    <div>
{
  arr.map((data) => (
    <Input
    title={data.title} type={data.type} fn={data.fn} text={data.text}/>
  ))
}
      <Modal
      header="Change password"
      titlePosition="text-center"
      >
          <Select
      title="hello world"
      fn={handleDelet}
      err=""
      xtstyles="w-full"
      arr={myArr}
      />
      <Select
      title="hello world"
      fn={handleDelet}
      err="password is required"
      xtstyles="w-full"
      arr={myArr}
      />
      </Modal>

    </div>
  );
}

export default DemoForm;


