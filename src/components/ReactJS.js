import React from "react";

const ReactJS = ({ data }) => {
  return (
    <div className="container py-5">
      <img
        style={{ width: "150px" }}
        src={data.events[2].reactjs.image}
        alt="react js"
      />
      <h2>{data.events[2].reactjs.title}</h2>
      <p>{data.events[2].reactjs.description}</p>
    </div>
  );
};

export default ReactJS;
