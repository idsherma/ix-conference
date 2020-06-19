import React from "react";

const NodeJS = ({ data }) => {
  console.log(data.events[0].nodejs.image);
  return (
    <div className="container py-5">
      <img
        style={{ width: "50px" }}
        src={data.events[0].nodejs.image}
        alt="node js"
      />
      <h2>{data.events[0].nodejs.title}</h2>
      <p>{data.events[0].nodejs.description}</p>
    </div>
  );
};

export default NodeJS;
