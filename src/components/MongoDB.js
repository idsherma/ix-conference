import React from "react";

const MongoDB = ({ data }) => {
  return (
    <div className="container py-5">
      <img
        style={{ width: "150px" }}
        src={data.events[3].mongodb.image}
        alt="mongodb"
      />
      <h2>{data.events[3].mongodb.title}</h2>
      <p>{data.events[3].mongodb.description}</p>
    </div>
  );
};

export default MongoDB;
