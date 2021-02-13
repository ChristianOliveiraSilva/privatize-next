import React, { useState } from 'react'
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import PropTypes from 'prop-types'
import nameIcon from '../../Assets/Name.svg'
import passIcon from '../../Assets/Pass.svg'
import Request from '../../Helpers/Request.ts'
import loadingSVG from '../../Assets/loadinglogin.svg'
import registerConstants from '../../Helpers/RegisterHelpers/registerConstants'
import { Center, Flex } from '../../Global/Style'
import { Form, Loading } from './style'
import { store } from 'react-notifications-component'
import alertTypes from '../../Helpers/Shared/sharedConstants'
import Logo from '../../Components/Logo'
import { useRouter } from 'next/router'

function Register (props) {
    const [loading, setLoading] = useState(false)
    const [inputStates, setInputStates] = useState(registerConstants.initialInputStates)

    const router = useRouter();

    const returnToHomePage = () => {
        router.push('/')
    }

    const createUser = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setLoading(true)

        const fields = {
            login: document.getElementById('login'),
            name: document.getElementById('name'),
            cpf: document.getElementById('cpf'),
            email: document.getElementById('email'),
            password: document.getElementById('password'),
            confirmPassword: document.getElementById('confirmPassword')
        }

        const isFieldNotFilled = checkRequired(fields)

        if (isFieldNotFilled) {
            setLoading(false)
            return null
        }

        const data = getFieldValues(fields)

        Request('POST', 'URL', data)
            .then(res => { setLoading(false); createUserSuccess(res) })
            .catch(alert('error'))
    }

    function createUserSuccess (res) {
        router.push('/Login')

        store.addNotification({
            title: 'Success',
            message: 'Usuário criado com sucesso!',
            type: 'success',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        })
    }

    function checkRequired (fields) {
        let isFieldNotFilled = false

        for (const key in fields) {
            if (!fields[key].value) {
                inputStates[key] = alertTypes.ERROR
                isFieldNotFilled = true
            }
        }

        if (isFieldNotFilled) {
            store.addNotification({
                title: 'Error',
                message: 'Por favor, informe todos os campos para finalizar.',
                type: 'danger',
                insert: 'top',
                container: 'top-right',
                animationIn: ['animate__animated', 'animate__fadeIn'],
                animationOut: ['animate__animated', 'animate__fadeOut'],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            })

            setInputStates({ ...inputStates })
        }

        return isFieldNotFilled
    }

    function getFieldValues (fields) {
        const values = {}
        for (const key in fields) {
            values[key] = fields[key].value
        }

        return values
    }

    function normalizeInputState (inputId) {
        if (inputStates[inputId] !== null) {
            inputStates[inputId] = null
            setInputStates({ ...inputStates })
        }
    }

    function handleChange ({ target }) {
        normalizeInputState(target.id)
    }

    return (
        <Center>
            <Form onSubmit={ createUser }>
                <Logo/>
                <Flex flexDirection="column">
                    <Loading src={loadingSVG} visible={loading}/>
                    <Input onChange={e => handleChange(e)} id='login' state={inputStates.login} placeholder="Nome de usuário" type="text" icon={ nameIcon } />
                    <Input onChange={e => handleChange(e)} id='name' state={inputStates.name} placeholder="Nome completo" type="text" icon={ nameIcon } />
                    <Input onChange={e => handleChange(e)} id='cpf' state={inputStates.cpf} placeholder="Cpf" type="text" icon={ nameIcon } />
                    <Input onChange={e => handleChange(e)} id='email' state={inputStates.email} style={{ marginTop: '5px' }} placeholder="Email" type="email" icon={ nameIcon } />
                    <Input onChange={e => handleChange(e)} id='password' state={inputStates.password} style={{ marginTop: '5px' }} placeholder="Senha" type="password" marginTop="20px" icon={ passIcon } />
                    <Input onChange={e => handleChange(e)} id='confirmPassword' state={inputStates.confirmPassword} style={{ marginTop: '5px' }} placeholder="Confirmar Senha" type="password" marginTop="20px" icon={ passIcon } />
                    <Flex flexDirection="row" width="100%" justifyContent="space-between" marginTop="20px">
                        <Button
                            onClick={ returnToHomePage }
                            fontSize="18px"
                            backgroundColor="lightgray"
                            width="100px"
                            height="40px"
                            rounded
                            hoverBackgroundColor="#EDEDED"
                            text="Retroceder"/>
                        <Button
                            type="submit"
                            fontSize="18px"
                            hoverBackgroundColor="#EDEDED"
                            backgroundColor="#76AE63"
                            rounded
                            height="40px"
                            text="Finalizar"/>
                    </Flex>
                </Flex>
            </Form>
        </Center>
    )
}

Register.propTypes = {
    
}

export default Register
