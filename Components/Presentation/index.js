import React from 'react'
import Button from '../Button'
import { Flex } from '../../Global/Style'
import { Content, Title, Subtitle, Container } from './style'
import PropTypes from 'prop-types'

function Presentation (props) {
    return (
        <Container style={{ backgroundColor: '#E4FFE7' }}>
            <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" >
                <Content>
                    <Title>Teste vercel</Title>
                    <Subtitle>Subtitulo SubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtituloSubtitulo</Subtitle>
                    <Button
                        onClick={() => props.router.push('/Login')}
                        text="Sign Up"
                        backgroundColor="white"
                        hoverBackgroundColor="#76AE63"
                        hoverColor="white"
                        fontColor="#76AE63"
                        fontSize="14px"
                        border="solid 0.5px lightgray"
                        style={{ width: '120px', height: '30px', border: 'solid 0.5px '}}
                        rounded
                    />
                </Content>
            </Flex>
        </Container>
    )
}

Presentation.propTypes = {
    router: PropTypes.object
}

export default Presentation
