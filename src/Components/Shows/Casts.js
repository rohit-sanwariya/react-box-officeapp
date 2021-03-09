import React from 'react'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import {FlexGrid} from '../Styled'
const Casts = ({cast}) => {
    return (
        <div>
            {
            cast.map(({person,character,voice},key)=>(
                <div key={key}>
                    <div>
                        <img src={person.image ? person.image.medium : IMAGE_NOT_FOUND} alt=""/>
                    </div>
                    <div>
                        <span>{person.name} | {character.name} {voice ? `| Voice`: ' '}</span>
                    </div>
                </div>
            )
            )

            }
        </div>
    )
}

export default Casts
