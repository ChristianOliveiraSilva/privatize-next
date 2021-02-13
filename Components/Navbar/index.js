import React from 'react'
import { Flex } from '../../Global/Style'
import { Content } from './style'
import NavLogin from '../../Components/NavLogin'
import PropTypes from 'prop-types'
import Logo from '../Logo'

function Navbar (props) {

    const backToHome = () => {
        props.router.push('/')
    }

    const navLoginStyle = {
        marginRight: '20px'
    }

    const logoStyle = {
        marginLeft: '20px'
    }

    return (
        <Content>
            <Flex
                id="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between">
                <Logo
                    onClick={ backToHome }
                    style={ logoStyle } />
                <NavLogin
                    user={ props.user }
                    style={ navLoginStyle }
                    router={ props.router }
                />
            </Flex>
        </Content>
    )
}

Navbar.propTypes = {
    router: PropTypes.object
}


export default Navbar;
