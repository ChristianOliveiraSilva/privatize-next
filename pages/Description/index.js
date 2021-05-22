import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Proptypes from 'prop-types'
import Graphic from '../../Components/Graphic'
import Button from '../../Components/Button'
import Comentary from '../../Components/Comentary'
import Footer from '../../Interfaces/Footer'
import Pie from '../../Components/Pie'
import InfoBox from '../../Components/InfoBox'
import Like from '../../Assets/Like.svg'
import Deslike from '../../Assets/Deslike.svg'

import { DescriptionBase, CompanieLogo, Buttons, ComentContainer, PieContainer, Content, ContentContainer, ApprovalContainer, ApprovalIcons } from './style'

import { pieData, barData } from '../../Helpers/MockDataJSON/GraphicMockData'
import { useRouter } from 'next/router'

function Description (props) {

    const router = useRouter()

    const [isContentVisible, setIsContentVisible] = useState(true)
    const [approvalRating, setApprovalRating] = useState(0)
    const [disapprovalRating, setDisapprovalRating] = useState(0)

    return (
        <DescriptionBase>
            <Navbar router={router} />
                <ContentContainer>
                    <InfoBox onOpen={() => setIsContentVisible(false)} onClose={() => setIsContentVisible(true)}/>
                    <Content isContentVisible={isContentVisible} id="descriptionContent">
                        <h1 style={{ marginLeft: '60px', marginTop: '400px', fontSize: '25px', position: 'absolute' }}>Aprovam: {approvalRating}</h1>
                        <h1 style={{ marginLeft: '250px', marginTop: '400px', fontSize: '25px', position: 'absolute' }}>Reprovam : { disapprovalRating }</h1>
                        <CompanieLogo>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Petrobras.svg/1280px-Petrobras.svg.png'/>
                        </CompanieLogo>
                        <div id='bar' style={{ width: '100%', height: '300px' }}>
                            <Graphic type='bar' index={'Mês'} keys={[ 'Aprovam', 'Reprovam' ]} data={barData}  keys={['Assinaturas']} />
                        </div>
                        <ApprovalContainer>
                            <ApprovalIcons>
                                <span>Curte a empresa?</span>
                                <img src={Like}/>
                                <img src={Deslike}/>
                            </ApprovalIcons>
                            <Buttons>
                                <div id='question'>
                                    <span>Deveria ser privatizado?</span>
                                </div>
                                <Button
                                    style={{ marginRight: '20px' }}
                                    onClick={() => setApprovalRating(prev => prev + 1)}
                                    width='200px'
                                    height='50px'
                                    text='Sim'
                                    hoverBackgroundColor='#CACACA'
                                    hoverColor='white'
                                    backgroundColor='#008542'
                                    rounded />
                                <Button
                                    style={{ marginRight: '20px' }}
                                    onClick={() => setDisapprovalRating(prev => prev + 1)}
                                    width='200px'
                                    height='50px'
                                    text='Não'
                                    hoverBackgroundColor='#CACACA'
                                    hoverColor='white'
                                    backgroundColor='red'
                                    rounded />
                            </Buttons>
                        </ApprovalContainer>
                        <div style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                            <ComentContainer>
                                <Comentary />
                                <PieContainer>
                                    <Pie data={pieData} />
                                </PieContainer>
                            </ComentContainer>
                        </div>
                    </Content>
                </ContentContainer>
            <Footer />
        </DescriptionBase>
    )
}

Description.propTypes = {
    history: Proptypes.object
}

export default Description
