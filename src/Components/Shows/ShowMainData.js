import React from 'react'
import {Star,MainDataWrapper,Headline,TagList} from '../Styled'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
const ShowMainData = ({image,rating,summary,tags,name}) => {
    return (
        <MainDataWrapper>
           
               <img  src={image?image.original:IMAGE_NOT_FOUND} alt="show-cover" /> 
               <div className="text-side">
                   <Headline>
                       <h1>{name}</h1>
                     {" "} <span> {rating.average || 'N/A'} </span> <Star/> 

                   </Headline>
                   <div className="summary" dangerouslySetInnerHTML={{__html:summary}}>

                   </div>
                  
                   <TagList>
                  <p> Tags: </p>
                       {tags.map((tag,i)=>{
                          return <span  key={i}>{tag}{" "}</span>
                       })}
                   </TagList>
               </div>
        </MainDataWrapper>
    )
}

export default ShowMainData
