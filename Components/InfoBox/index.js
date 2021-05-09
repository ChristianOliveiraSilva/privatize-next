import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { InfoBoxHandler, InfoBoxHandlerMobile, InfoBoxContent, InfoRow } from './style'

const data = [
    { Tipo: 'Empresa de capital aberto' },
    { Slogan: 'O desafio é a nossa energia.' },
    { Atividade: ['Petróleo', 'Gás', 'Energia', 'Biocombustível'] },
    { Gênero: 'Sociedade de economia mista.' },
    { Fundação: '3 de outubro de 1953 (67 anos)' },
    { 'Fundador(es)': 'Governo Federal do Brasil, sob a presidência de Getúlio Vargas, que foi o articulador principal' },
    { Sede: 'Rio de Janeiro, RJ,  Brasil' },
    { 'Area(s) Servida(s)': 'Mundo' },
    { 'Proprietário(s)': 'Governo Federal do Brasil' },
    { Presidente: 'Roberto Castello Branco' },
    { Empregados: '46 416 (2020)[2]' },
    { Produtos: 'Combustíveis Derivados de Petróleo' },
    {
        Subsidiárias: [
            'Acionistas Governo Federal do Brasil (50,26%)',
            'Investidores brasileiros (10,52%)',
            'Investidores estrangeiros (38,98%)[3]'
        ]
    },
    { 'Valor de mercado': 'Baixa R$ 183,6 bilhões (2020)[4]' },
    { Lucro: 'Aumento R$ 40,1 bilhões (2019)[5]' },
    { LAJIR: 'Aumento R$ 129,2 bilhões (2019)[5]' },
    { Faturamento: 'Baixa R$ 302,2 bilhões (2019)[5]' },
    { 'Website oficial': 'www.petrobras.com.br' }
]

function InfoBox (props) {
    let [isOpen, setIsOpen] = useState(false)

    function infoBoxHandler() {
        const hoverHandler = document.getElementById('hoverHandler')
        const hoverText = document.getElementById('hoverText')
        const descriptionContent = document.getElementById('descriptionContent')

        if (isOpen) {
            descriptionContent.style.width = '100%'

            hoverText.style.left = '20px'
            hoverHandler.style.transformOrigin = 'top right'

            if (props.onClose) {
                props.onClose()
            }
        } else {
            descriptionContent.style.width = 'calc(100% - 400px)'

            hoverText.style.left = '65px'
            hoverHandler.style.transformOrigin = 'top left'
    
            if (props.onOpen){
                props.onOpen()
            }
        }
        setIsOpen(!isOpen)
    }

    return (
        <>
            <InfoBoxHandler isOpen={isOpen} onClick={ () => infoBoxHandler()} id="infoHandler">
                <div id="hoverHandler"></div>
                <span id="hoverText">Informações</span>
            </InfoBoxHandler>
            <InfoBoxHandlerMobile isOpen={isOpen} onClick={ () => infoBoxHandler()}>
                <span>{ isOpen ? 'close' : 'open'}</span>
            </InfoBoxHandlerMobile>
            <InfoBoxContent isOpen={isOpen} { ...props }>
                <h1 style={{paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bold' }}>Petróleo Brasileiro S.A.</h1>
                {data.map((value, i) => {
                    const key = Object.keys(value)[0]
                    const currentValue = value[key]
                    if (Array.isArray(currentValue)) {
                        return (
                            <InfoRow style={{ borderBottom: 'solid 0.5px lightgray', paddingBottom: '10px', marginBottom: '10px', marginTop: '10px' }} key={i}>
                                <h2>{key}</h2>
                                {currentValue.map((arrValue, e) => {
                                    return (<span style={{ display: 'block', width: '100%', fontSize: '14px' }} key={e}>{e + 1 + '. ' + arrValue}</span>)
                                })}
                            </InfoRow>
                        )
                    } else {
                        return (
                            <InfoRow style={{ fontSize: '14px' }} key={i}>
                                <a style={{ fontWeight: 'bold' }}>{key}: </a>{currentValue}
                            </InfoRow>
                        )
                    }
                })}
            </InfoBoxContent>
        </>
    )
}

InfoBox.propTypes = {
    setDescriptionContentWidth: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func
}

export default InfoBox
