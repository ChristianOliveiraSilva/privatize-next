import React from 'react'
import { BaseNavbar } from './style'
import NavLogin from './NavLogin'
import Logo from '../Logo'

interface NavBarProps {
    router: {
        push: Function
    };
    user: Object
}

const Navbar: React.FC<NavBarProps> = (props) => {

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
        <BaseNavbar id='navbar'>
            <Logo
                fontSize='25px' 
                wf1000='18px' 
                wf400='15px'
                onClick={ backToHome }
                style={ logoStyle } />
            <NavLogin
                user={ props.user }
                style={ navLoginStyle }
                router={ props.router }
            />
        </BaseNavbar>
    )
}

export default Navbar;
