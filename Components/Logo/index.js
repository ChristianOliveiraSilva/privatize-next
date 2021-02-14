import React from 'react'
import { LogoBase } from './style'
import PropTypes from 'prop-types'

function Logo (props) {

    return (
        <LogoBase onClick={props.onClick} {...props} >Privatize já</LogoBase>
    )
}

Logo.propTypes = {
    onClick: PropTypes.func,
    wf1000: PropTypes.string,
    wf600: PropTypes.string,
    wf400: PropTypes.string,
    fontSize: PropTypes.string,
    style: PropTypes.object
}

export default Logo
