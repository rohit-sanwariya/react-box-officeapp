import React from "react";
import { Link } from "react-router-dom";


const ActorCards = ({ id, name, image, summary,country , birthday,deathday,gender }) => {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/, "")}..`
    : "No description";
  return (
    <div>
      <div>
        <img src={image} alt="" />
      </div>
      <h1>{name} {gender?`${gender}`:null}</h1>
      <p>{country?`Comes from ${country}`:`No country known`}</p>
    {birthday ? <p>Born: {birthday}</p> : null}
    <p>{deathday?`Died: ${deathday}`:`Alive`}</p>
      <div>
        <Link to={`actor/${id}`}>Read More</Link>
        <button type="button">Star Me.</button>
      </div>
    </div>
  );
};


export default ActorCards;
