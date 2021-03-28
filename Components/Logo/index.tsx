import React from 'react'
import { LogoBase } from './style'

interface LogoProps {
    onClick: Function,
    wf1000: String,
    wf600: String,
    wf400: String,
    fontSize: String,
    style: Object
}
const Logo: React.FC<LogoProps>  = (props) => {
    return (
        <LogoBase {...props}>Privatize já</LogoBase>
    )
}

export default Logo
