import React from "react";

const ExpressJS = ({ data }) => {
  return (
    <div className="container py-5">
      <img
        style={{ width: "150px" }}
        src={data.events[1].expressjs.image}
        alt="express js"
      />
      <h2>{data.events[1].expressjs.title}</h2>
      <p>{data.events[1].expressjs.description}</p>
    </div>
  );
};

export default ExpressJS;
