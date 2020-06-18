import React from "react";

const Avatar = ({ speakerImage }) => {
  return (
    <img
      src={speakerImage}
      className="card-img-top"
      alt="..."
      style={{ width: "10rem" }}
    />
  );
};

export default Avatar;
