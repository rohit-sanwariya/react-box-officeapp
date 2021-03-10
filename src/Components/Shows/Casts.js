import React from 'react'
import IMAGE_NOT_FOUND from '../../images/not-found.png'
import {CastList} from '../Styled'
const Casts = ({cast}) => {
    return (
        <CastList>
            {
            cast.map(({person,character,voice},key)=>(
                <div key={key} className="cast-item">
                    <div className="pic-wrapper">
                        <img src={person.image ? person.image.medium : IMAGE_NOT_FOUND} alt="" className=""/>
                    </div>
                    <div className="actor">
                        <span ><span className=" bold">{person.name}</span> | {character.name} {voice ? `| Voice`: ' '}</span>
                    </div>
                </div>
            )
            )

            }
        </CastList>
    )
}

export default Casts
