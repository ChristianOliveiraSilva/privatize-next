import React, { useState, useEffect} from 'react'
import { Content, Icon, HoverUser } from './style'
import User from '../../../Assets/User.svg'
import PropTypes from 'prop-types'

function NavLogin (props) {
        const [isHover, setIsHover] = useState(false)
        const [mouseStatus, setMouseStatus] = useState(false)
        const { router } = props;

    useEffect(() => {
        const timeOut = window.setTimeout(() => {
            if (!mouseStatus) {
                setIsHover(false)
            }
        }, 1000)

        return () => window.clearTimeout(timeOut)
    }, [mouseStatus])

    const logout = () => {

    }

    function renderHoverUser() {
        if (isHover) {
            return (
                <HoverUser>
                    <div>
                        <span onClick={() => router.push('/Profile')}>Perfil</span>
                    </div>
                    <div>
                        <span onClick={ logout }>Logout</span>
                    </div>
                </HoverUser>
            )
        }
    }

    if (true) {
        return (
            <Content 
                onMouseEnter={ () => setIsHover(true) } 
                onMouseOver={ () => setMouseStatus(true) }
                onMouseOut={() => setMouseStatus(false) }
                {...props}
            >
                <span> Usuário logado </span>
                {renderHoverUser()}
            </Content>
        )
    }

    return (
        <Content {...props}>
            <Icon src={User}/>
            <span id="login" onClick={() => router.push('/Login')}>Login</span>
            <span id="register" onClick={() => router.push('/Register')}>Cadastrar-se</span>
        </Content>
    )
}

NavLogin.propTypes = {
    router: PropTypes.object.isRequired,
    user: PropTypes.object,
    style: PropTypes.object
}

export default NavLogin
