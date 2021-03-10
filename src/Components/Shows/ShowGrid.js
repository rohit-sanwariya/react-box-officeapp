import React from 'react'
import ShowCards from './ShowCards';
import {FlexGrid} from '../Styled'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { useShow } from '../../Misc/CustomHooks';
const ShowGrid = ({results}) => {
   
    const [starredShows,dipatchStarred] = useShow();
    return  (  <FlexGrid> {results.map(
            ({show},i)=>{

const isStarred = starredShows.includes(show.id)
const onStarClick = ()=>{
     
    if(isStarred){
       dipatchStarred({type:"REMOVE",showId:show.id}) 
    }
    else{
        dipatchStarred({type:"ADD",showId:show.id})
    }
}
                
        return (< ShowCards 
            onStarClick = {onStarClick}
            istarred = {isStarred}
        key={show.id} 
        name = {show.name} 
        id={show.id}
        image ={show.image ? show.image.medium : IMAGE_NOT_FOUND }
        summary = {show.summary}
        />)
        }
        )} </FlexGrid>)
    
}

export default ShowGrid
