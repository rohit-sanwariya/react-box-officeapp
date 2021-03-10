import React from 'react'
import {DetailsWrapper} from '../Styled'
const pObject ={margin: "5px 0"}
const Details = ({status,premiered,network}) => {
    return (
        <DetailsWrapper>
            <p className={pObject}>
                Status: <span>{status}</span>
            </p>
            <p className={pObject}>
                Premiered {premiered} {network?` on ${network.name}`:null}
            </p>
        </DetailsWrapper>
    )
}

export default Details
