import React from 'react'
import PropTypes from 'prop-types'

import { BaseProfile, ProfileContainer, UserInformation, InformationContainer, Image } from './style'

import Navbar from '../../Components/Navbar'
import Button from '../../Components/Button'

import { useRouter } from 'next/dist/client/router'

import EditableText from '../../Components/EditableText'
import UserImage from '../../Assets/User.svg'

const inputStyle = {
    width: '280px',
    height: '35px'
}

const textStyle = {
    fontSize: '25px'
}

const buttonStyle = {
    marginTop: '20px',
    width: '250px'
}

function Profile(props) {

    const router = useRouter();

    function getUserImage () {
        if (false) {
            return undefined
        } else {
            return UserImage
        }
    } 

    return (
        <BaseProfile>
            <Navbar router={router}/>
            <ProfileContainer>
                <InformationContainer>
                    <Image src={getUserImage()}/>
                    <UserInformation>
                        <EditableText placeholder='Login' inputStyle={inputStyle} textstyle={textStyle} text='login'/>
                        <EditableText placeholder='Nome Completo' inputStyle={inputStyle} textstyle={textStyle} text='Nome Completo'/>
                        <EditableText placeholder='Email' inputStyle={inputStyle} textstyle={textStyle} text='Teste@hotmail.com'/>
                        <EditableText placeholder='Senha' inputStyle={inputStyle} textstyle={textStyle} text='********'/>
                    </UserInformation>
                </InformationContainer>
                <Button style={buttonStyle} 
                        text='Deletar perfil' 
                        backgroundColor='lightgray'
                        hoverBackgroundColor='red'
                />
            </ProfileContainer>
        </BaseProfile>
    )
}

Profile.propTypes = {
    
}

export default Profile

