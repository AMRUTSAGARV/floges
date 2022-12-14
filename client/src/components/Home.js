import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import Tables from "./Tables";
const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="container">
      <header className="jumbotron">
        <h6>{content}</h6>
        <Tables />
      </header>
    </div>
  );
};
export default Home;
