import React from "react";
import { Link } from "react-router-dom";
import {BStar, SearchCard, Star} from '../Styled'

const ShowCards = ({ id, name, image, summary,onStarClick ,istarred}) => {
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
      <div style= {{display:"flex",flexDirection:"row",justifyContent:"space-between" }}>
        <Link style={{marginTop:"5px"}} to={`show/${id}`}>Read More</Link>
        <button style={starStyle}
         onClick={onStarClick} type="button">{istarred?<Star/>:<BStar/>}</button>
      </div>
    </SearchCard>
  );
};


export default ShowCards;
const starStyle ={borderBottom:"1px solid black",
background:"#fff",
borderRadius:"12px",
margin:"0",
padding:"1px 7px 0 0",
outline:"none"
}