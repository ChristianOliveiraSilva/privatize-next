import React from 'react'
import { ReasonCardWrapper } from './style'

function ReasonCard(props) {
    return (
        <ReasonCardWrapper>
            <span>{props.text}</span>
        </ReasonCardWrapper>
    )
}

export default ReasonCard
