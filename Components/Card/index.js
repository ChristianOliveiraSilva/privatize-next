import React from 'react'
import Correios from '../../Assets/Correios.png'
import Proptypes from 'prop-types'
import { Content, Logo, Footer } from './style'

function Card (props) {
    return (
        <Content {...props} onClick={() => props.router.push('/Description')}>
            <Logo>
                <img src={Correios} />
            </Logo>
            <Footer>
                <div>
                    <span id="subs" >3</span><span>Assinaturas</span>
                </div>
                <div>
                    <span id="companie" >Empresa</span>
                </div>
            </Footer>
        </Content>
    )
}

Proptypes.Card = {
    history: Proptypes.func,
    animated: Proptypes.bool
}

export default Card
