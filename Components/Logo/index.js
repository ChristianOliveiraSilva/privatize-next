import React from 'react'
import { LogoBase } from './style'
import PropTypes from 'prop-types'

function Logo (props) {

    return (
        <LogoBase onClick={props.onClick} {...props} >Privatize já</LogoBase>
    )
}

Logo.propTypes = {
    onClick: PropTypes.func
}

export default Logo
