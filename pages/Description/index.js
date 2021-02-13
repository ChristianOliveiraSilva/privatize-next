import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Proptypes from 'prop-types'
import Graphic from '../../Components/Graphic'
import Button from '../../Components/Button'
import Comentary from '../../Components/Comentary'
import Footer from '../../Interfaces/Footer'
import Pie from '../../Components/Pie'
import InfoBox from '../../Components/InfoBox'

import { DescriptionBase, CompanieLogo, Buttons, ComentContainer, PieContainer, Content } from './style'

import { useRouter } from 'next/router'

function Description (props) {

    const router = useRouter()

    const pieData = [
        {
            id: 'Satisfeitos',
            label: 'Satisfeitos',
            value: 20
        },
        {
            id: 'Não Satisfeitos',
            label: 'Não Satisfeitos',
            value: 80
        }
    ]

    const barData = [
        {
            Mês: 'Mês 1',
            Assinaturas: 1
        },
        {
            Mês: 'Mês 2',
            Assinaturas: 52
        },
        {
            Mês: 'Mês 3',
            Assinaturas: 120
        },
        {
            Mês: 'Mês 4',
            Assinaturas: 46
        },
        {
            Mês: 'Mês 5',
            Assinaturas: 85
        },
        {
            Mês: 'Mês 6',
            Assinaturas: 146
        },
        {
            Mês: 'Mês 7',
            Assinaturas: 1
        },
        {
            Mês: 'Mês 8',
            Assinaturas: 52
        },
        {
            Mês: 'Mês 9',
            Assinaturas: 120
        },
        {
            Mês: 'Mês 10',
            Assinaturas: 46
        },
        {
            Mês: 'Mês 11',
            Assinaturas: 85
        },
        {
            Mês: 'Mês 12',
            Assinaturas: 146
        }
    ]

    const index = 'Mês'
    const keys = ['Assinaturas']

    return (
        <DescriptionBase>
            <Navbar router={router} />
            <InfoBox/>
            <Content id="descriptionContent">
                <h1 style={{ marginLeft: '60px', marginTop: '400px', fontSize: '25px', position: 'absolute' }}>Aprovam : 574</h1>
                <h1 style={{ marginLeft: '250px', marginTop: '400px', fontSize: '25px', position: 'absolute' }}>Reprovam : 21</h1>
                <CompanieLogo>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Petrobras.svg/1280px-Petrobras.svg.png'/>
                </CompanieLogo>
                <div id='bar' style={{ width: '100%', height: '300px' }}>
                    <Graphic type='bar' data={barData} index={index} keys={keys} />
                </div>
                <Buttons>
                    <span>Você aprova a privatização:</span>
                    <Button
                        style={{ marginRight: '20px' }}
                        width='200px'
                        height='50px'
                        text='Aprovar'
                        hoverBackgroundColor='#CACACA'
                        hoverColor='white'
                        backgroundColor='#008542'
                        rounded />
                    <Button
                        style={{ marginRight: '20px' }}
                        width='200px'
                        height='50px'
                        text='Reprovar'
                        hoverBackgroundColor='#CACACA'
                        hoverColor='white'
                        backgroundColor='red'
                        rounded />
                </Buttons>
                <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                    <ComentContainer>
                        <Comentary />
                        <PieContainer>
                            <Pie data={pieData} />
                        </PieContainer>
                    </ComentContainer>
                </div>
                <Footer />
            </Content>
        </DescriptionBase>
    )
}

Description.propTypes = {
    history: Proptypes.object
}

export default Description
