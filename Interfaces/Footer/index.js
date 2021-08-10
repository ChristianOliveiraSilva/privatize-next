import React from 'react'
import Logo from '../../Components/Logo'
import { Container } from '../../Global/Style'
import { FooterBase, SectionContainer } from './style'

const logoStyle = {
    fontSize: '40px'
}

function Footer() {
    return (
        <FooterBase>
            <Container>
                <Logo style={logoStyle}/>
                <SectionContainer>
                    <section>
                        <div>
                            <h1>Sobre nós</h1>
                        </div>
                        <div className='options'>
                            <span>Sobre</span>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>Legal</h1>
                        </div>
                        <div className='options'>
                            <span>Termos de uso</span>
                            <span>Politicas de privacidade</span>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h1>Social</h1>
                        </div>
                        <div className='options'>
                            <span>Facebook</span>
                            <span>Twiter</span>
                            <span>Instagram</span>
                        </div>
                    </section>
                </SectionContainer>
            </Container>
        </FooterBase>
    )
}

export default Footer
