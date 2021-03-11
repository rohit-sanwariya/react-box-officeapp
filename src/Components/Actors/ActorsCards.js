import React from "react";
import { Link } from "react-router-dom";
import {StyledActorCard} from '../Actors/ActorCardstyles'

const ActorCards = ({ id, name, image, summary,country , birthday,deathday,gender }) => {
  const summaryText = summary
    ? `${summary.split(" ").slice(0, 10).join(" ").replace(/<.+?>/g, "")}..`
    : "No description";
  return (
    <StyledActorCard>
      <div>
        <img className= "img-wrapper" src={image} alt="" />
      </div>
      <h1>{name} {gender?`${gender}`:null}</h1>
      <p>{country?`Comes from ${country}`:`No country known`}</p>
    {birthday ? <p>Born: {birthday}</p> : null}
    <p className="deathday">{deathday?`Died: ${deathday}`:`Alive`}</p>

    </StyledActorCard>
  );
};


export default ActorCards;
