import React from 'react'
import Logo from '../../Components/Logo'
import NavLogin from '../../Components/NavLogin'
import Flex from '../../Global/Style'
import Content from './style'

function Header (props) {
    return (
        <Content>
            <Flex max="true" flexWrap="wrap" flexDirection="row">
                <div id="logo">
                    <Logo />
                </div>
                <div id="navLogin">
                    <div id="navDiv">
                        <NavLogin history={props.history}/>
                    </div>
                </div>
            </Flex>
        </Content>
    )
}

export default Header
