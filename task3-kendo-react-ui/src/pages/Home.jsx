import React from "react";
import Form from "../components/forms/Form";

const Home = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Home;
