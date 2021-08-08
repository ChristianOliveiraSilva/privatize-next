import React from 'react'
import { ProfileIconWrapper, Icon } from './style' 

function ProfileIcon(props) {
    return (
        <ProfileIconWrapper>
            <Icon src={props.image}/>
        </ProfileIconWrapper>
    )
}

export default ProfileIcon
