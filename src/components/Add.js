import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [input, setInput] = useState({
    email: "",
    username: "",
    message: "",
    postId: 100,
  });
  const navigate = useNavigate();

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    const { username, email, message, postId } = input;
    const res = await fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        name: username,
        email: email,
        body: message,
      }),
    });
     await res.json();
    if (res.status !== 201) {
      alert("Error in add note");
    } else {
      alert("Note added")
      navigate("/redux");
    }
  };
  return (
    <>
      <h1 className="text-center text-danger my-5" style={{ fontSize: "30px" }}>
        Add new TextUtils
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form method="post">
          <input
            type="email"
            className="my-2"
            onChange={inputHandler}
            name="email"
            value={input.email}
            placeholder="Enter email"
          />
          <input
            type="text"
            className="my-2"
            onChange={inputHandler}
            name="username"
            value={input.username}
            placeholder="Enter Name"
          />
          <textarea
            placeholder="Enter message here...."
            value={input.message}
            onChange={inputHandler}
            name="message"
          ></textarea>
          <button
            className="btn btn-outline-primary my-1"
            style={{ fontSize: "20px" }}
            onClick={submitHandler}
          >
            Add new
          </button>
        </form>
      </div>
    </>
  );
};

export default Add;
