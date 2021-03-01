import React from 'react'
import ShowCards from './ShowCards';
import {FlexGrid} from '../Styled'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
const ShowGrid = ({results}) => {
    
        return <FlexGrid> {results.map(
            ({show},i)=>{
        return < ShowCards 
        key={show.id} 
        name = {show.name} 
        id={show.id}
        image ={show.image ? show.image.medium : IMAGE_NOT_FOUND }
        summary = {show.summary}
        />
        }
        )} </FlexGrid>
    
}

export default ShowGrid
