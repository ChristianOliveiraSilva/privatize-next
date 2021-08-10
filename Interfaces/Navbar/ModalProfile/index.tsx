import React, { useContext } from 'react'

import EditableText from '../../../Components/EditableText'
import UserImage from '../../../Assets/User.svg'
import Modal from '../../../Components/Modal'

import { InformationContainer, Editables, ImageContainer, ProfileImage, ButtonContainer} from './style'
import Button from '../../../Components/Button'

import { ModalInteface } from '../../../Components/Modal/helpers/interfaces'
import ModalContext from '../../../Components/Modal/helpers/modalContext'

const headerText = 'Perfil'

const inputStyle = {
    width: '280px',
    height: '35px'
}

const textStyle = {
    fontSize: '25px'
}

interface ModalProfileProps {
    modalProps: ModalInteface,
    onClose: Function
}

const ModalProfile: React.FC<ModalProfileProps>  = (props) => {
 
    const setIsModalOpen = useContext(ModalContext);

    return (
        <Modal shadow headerText={headerText} {...props.modalProps}>
            <InformationContainer>
                <ImageContainer>
                    <ProfileImage src={UserImage}/>
                </ImageContainer>
                <Editables>
                    <EditableText placeholder='Login' inputStyle={inputStyle} textstyle={textStyle} text='login'/>
                    <EditableText placeholder='Nome Completo' inputStyle={inputStyle} textstyle={textStyle} text='Nome Completo'/>
                    <EditableText placeholder='Email' inputStyle={inputStyle} textstyle={textStyle} text='Teste@hotmail.com'/>
                    <EditableText placeholder='Senha' inputStyle={inputStyle} textstyle={textStyle} text='********'/>
                </Editables>
            </InformationContainer>
            <ButtonContainer>
                <Button 
                    text='fechar'
                    fontColor='gray'
                    hoverColor='white'
                    onClick={ () => setIsModalOpen(false) }
                    hoverBackgroundColor='gray'
                />
            </ButtonContainer>
        </Modal>
    )
}

export default ModalProfile
