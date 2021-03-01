import React from "react";
import { Link } from "react-router-dom";
import {SearchCard} from '../Styled'

const ShowCards = ({ id, name, image, summary }) => {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/, "")}..`
    : "No description";
  const  summaryTextb = summary ? summaryText.replace(/<b>/g, "").replace(/<\/b>/,""):"No description";
  return (
    <SearchCard>
      <div className="img-wrapper">
        <img src={image} alt="" />
      </div>
      <h1>{name}</h1>
      <p>{summaryTextb}</p>
      <div>
        <Link to={`show/${id}`}>Read More</Link>
        <button type="button">Star Me.</button>
      </div>
    </SearchCard>
  );
};


export default ShowCards;
