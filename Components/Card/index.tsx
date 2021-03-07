import React from 'react'
import { Content, Logo, Footer } from './style'

const Correios = require ('../../Assets/Correios.webp') as string

interface CardProps {
    router: {push: Function}
    animated?: boolean
}

const Card: React.FC<CardProps> = (props) => {
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

export default Card
