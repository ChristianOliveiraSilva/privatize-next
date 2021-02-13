import React, { useEffect } from 'react'
import { Form, LoginButtons, Loading } from './style'
import { Flex, Center } from '../../Global/Style'
import Input from '../../Components/Input'
import nameIcon from '../../Assets/Name.svg'
import passIcon from '../../Assets/Pass.svg'
import Button from '../../Components/Button'
import PropTypes from 'prop-types'
import loading from '../../Assets/loadinglogin.svg'
import Logo from '../../Components/Logo'
import { useRouter } from 'next/router'


import { GoogleLogin } from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { defaultTheme } from 'react-select'

function Login (props) {

    const router = useRouter();

    const responseGoogle = response => {
        console.log(response)
    }

    const responseFacebook = response => {
        console.log(response)
    }

    return (
        <Center>
            <Form>
                <Logo />
                <Loading src={loading} visible={false}/>
                <Flex flexDirection="column">
                    <Input placeholder="Nome de usuário" type="text" icon={nameIcon} />
                    <Input style={{ marginTop: '5px' }} placeholder="Senha" type="password" icon={passIcon} />
                    <span onClick={() => router.push('/Register')} id="obs">Não sou cadastrado.</span>
                    <Flex flexDirection="row" width="100%" justifyContent="space-between" marginTop="20px">
                        <Button onClick={() => router.push('/')} rounded fontSize="18px" backgroundColor="#76AE63" height="40px" width="100px" hoverBackgroundColor="#EDEDED" text="Retroceder"/>
                        <Button onClick={() => login(props.dispatch) } fontSize="18px" hoverBackgroundColor="#EDEDED" height="40px" text="Login"/>
                    </Flex>
                </Flex>
                <LoginButtons>
                    <Flex flexDirection="column" >
                        <GoogleLogin
                            clientId={`${process.env.CLIENTIDGOOGLE}`}
                            buttonText="Logar com o Google"
                            theme="light"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle => { console.log(responseGoogle) }}
                            cookiePolicy={'single_host_origin'}
                        />
                        <FacebookLogin
                            appId={process.env.APPIDFACEBOOK}
                            size="small"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            icon={<a style={{ marginRight: '20px', fontSize: '20px' }}>f</a>}
                            cssClass="facebook-button"
                            textButton="Logar com o Facebook"
                        />
                    </Flex>
                </LoginButtons>
            </Form>
        </Center>
    )
}

Login.propTypes = {
    
}

export default Login