import React, { useRef } from 'react'
import { Content, Icon, HoverUser } from './style'
import User from '../../Assets/User.svg'
import PropTypes from 'prop-types'

function NavLogin (props) {
    const hoverUser = useRef()

    const activeHoverUser = () => {
        hoverUser.current.style.display = 'block'
    }

    const deactivateHoverUser = () => {
        hoverUser.current.style.display = 'none'
    }

    if (true) {
        return (
            <Content onMouseLeave={ deactivateHoverUser } {...props}>
                <span onMouseEnter={ activeHoverUser }> Usuário logado </span>
                <HoverUser ref={ hoverUser }>
                    <div>
                        <span>Perfil</span>
                    </div>
                    <div>
                        <span>Logout</span>
                    </div>
                </HoverUser>
            </Content>
        )
    }

    const { router } = this.props;

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
