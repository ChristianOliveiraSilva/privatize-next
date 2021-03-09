import React from 'react'
import PropTypes from 'prop-types'

import { BaseProfile, CenterContainer, UserInformation, InformationContainer, Image, OptionsContainer, ProfileContainer } from './style'

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
    width: '200px'
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
            <CenterContainer>
                <ProfileContainer>
                    <OptionsContainer>
                        <Button style={buttonStyle} 
                            text='Deletar perfil' 
                            alignText='left'
                            backgroundColor='lightgray'
                            hoverBackgroundColor='red'
                        />
                        <Button style={buttonStyle} 
                            text='Logout' 
                            alignText='left'
                            backgroundColor='lightgray'
                            hoverBackgroundColor='red'
                        />
                    </OptionsContainer>
                    <InformationContainer>
                        <Image src={getUserImage()}/>
                        <UserInformation>
                            <EditableText placeholder='Login' inputStyle={inputStyle} textstyle={textStyle} text='login'/>
                            <EditableText placeholder='Nome Completo' inputStyle={inputStyle} textstyle={textStyle} text='Nome Completo'/>
                            <EditableText placeholder='Email' inputStyle={inputStyle} textstyle={textStyle} text='Teste@hotmail.com'/>
                            <EditableText placeholder='Senha' inputStyle={inputStyle} textstyle={textStyle} text='********'/>
                        </UserInformation>
                    </InformationContainer>
                </ProfileContainer>
                <Button style={buttonStyle} 
                    text='Voltar' 
                    backgroundColor='gray'
                    hoverBackgroundColor='green'
                    onClick={() => router.push("/")}
                />
            </CenterContainer>
        </BaseProfile>
    )
}

Profile.propTypes = {
    
}

export default Profile

