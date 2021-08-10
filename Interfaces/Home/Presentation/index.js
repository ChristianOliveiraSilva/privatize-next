import React from 'react'
import Button from '../../../Components/Button'
import { Flex } from '../../../Global/Style'
import { Content, Title, Subtitle, Container } from './style'
import PropTypes from 'prop-types'

function Presentation (props) {
    return (
        <Container style={{ backgroundColor: '#E2FAD9' }}>
            <Flex flexDirection="row" flexWrap="wrap" justifyContent="space-between" alignItems="center" >
                <Content>
                    <Title>Título da página</Title>
                    <Subtitle>Nunc mi mauris, tincidunt nec velit vitae, dapibus bibendum enim. Quisque ac nulla ut enim ornare consequat eu at ipsum. Suspendisse at suscipit lacus.</Subtitle>
                    <Button
                        onClick={() => props.router.push('/Login')}
                        text="Cadastrar-se"
                        backgroundColor="white"
                        hoverBackgroundColor="#76AE63"
                        hoverColor="white"
                        fontColor="#76AE63"
                        fontSize="14px"
                        border="solid 0.5px lightgray"
                        style={{ width: '170px', height: '30px', border: 'solid 0.5px '}}
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
