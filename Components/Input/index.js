import React from 'react'
import { Inp, Content, Icon } from './style'
import { isEmpty } from '../../Helpers'
import PropTypes from 'prop-types'
import sharedConstants from '../../Helpers/Shared/sharedConstants'

function Input (props) {

    const { onChange } = props

    const contentProps = {
        width: props.width,
        height: props.height
    }

    const IconProps = {
        src: props.icon,
        iconWidth: props.iconWidth,
        iconHeight: props.iconHeight
    }

    const InpProps = {
        placeholder: props.placeholder,
        id: props.id,
        type: props.type,
        fontSize: props.fontSize,
        backgroundColor: props.backgroundColor,
        rounded: props.rounded,
        state: props.state
    }

    const handleChange = (e) => {
        onChange && onChange(e)
    }

    const iconExists = () => {
        if (!isEmpty(props.icon)) { return true } else { return false }
    }

    const DivIcon = () => {
        if (iconExists()) {
            return (
                <div id="iconDiv">
                    <Icon {...IconProps} />
                </div>
            )
        } else return null
    }

    return (
        <Content {...contentProps} style={props.style}>
            <DivIcon/>
            <Inp onChange={ e => handleChange(e) } iconExists={ iconExists() } {...InpProps} />
        </Content>
    )
}

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.any,
    icon: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.string,
    height: PropTypes.string,
    fontSize: PropTypes.string,
    iconWidth: PropTypes.string,
    iconHeight: PropTypes.string,
    backgroundColor: PropTypes.string,
    onChange: PropTypes.func,
    rounded: PropTypes.bool,
    state: PropTypes.oneOf(sharedConstants.alertTypes)
}

export default Input
