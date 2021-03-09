import React from 'react'
import {Star,halfStar} from '../Styled'

const ShowMainData = ({image,rating,summary,tags,name}) => {
    return (
        <div>
           
               <img  src={image} alt="" /> 
               <div>
                   <div>
                       <h1>{name}</h1>
                    <Star/><span>{rating.average || 'N/A'}</span>

                   </div>
                   <div dangerouslySetInnerHTML={{__html:summary}}>

                   </div>
                  
                   <div>
                   Tags: {' '}
                       {tags.map((tag,i)=>{
                          return <span key={i}>{tag}{" "}</span>
                       })}
                   </div>
               </div>
        </div>
    )
}

export default ShowMainData
