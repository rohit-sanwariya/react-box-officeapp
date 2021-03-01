import React from 'react'
import ActorsCards from './ActorsCards';
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import { FlexGrid } from '../Styled';

const ActorGrids = ({results}) => {
    
        return <FlexGrid> {results.map(
            ({person},i)=>{
                console.log(person);
        return < ActorsCards 
        
        key={person.id} 
        name = {person.name} 
        country = {person.country ? person.country.name : null}
        birthday = {person.birthday}
        deathday = {person.deathday}
        gender = {person.gender}
        id={person.id}
        image ={person.image ? person.image.medium : IMAGE_NOT_FOUND }
        summary = {person.summary}
        />
        }
        )} </FlexGrid>
    
}

export default ActorGrids;
