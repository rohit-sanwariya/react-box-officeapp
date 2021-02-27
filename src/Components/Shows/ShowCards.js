import React from "react";
import { Link } from "react-router-dom";


const ShowCards = ({ id, name, image, summary }) => {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/, "")}..`
    : "No description";
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <p>{summaryText}</p>
      <div>
        <Link to={`show/${id}`}>Read More</Link>
        <button type="button">Star Me.</button>
      </div>
    </div>
  );
};


export default ShowCards;
