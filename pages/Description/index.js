import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Proptypes from 'prop-types'
import Graphic from '../../Components/Graphic'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer'
import Pie from '../../Components/Pie'
import InfoBox from '../../Components/InfoBox'
import Like from '../../Assets/Like.svg'
import Deslike from '../../Assets/Deslike.svg'
import Comment from '../../Components/Comment'

import { DescriptionBase, CompanieLogo, Buttons, CommentContainer, PieContainer, Content, ContentContainer, CommentChartContainer, GraphicWrapper } from './style'

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
                        <GraphicWrapper id='bar'>
                            <Graphic 
                                type='bar' 
                                index={'Mês'} 
                                keys={[ 'Aprovam', 'Reprovam' ]} 
                                data={barData}  
                                keys={['Assinaturas']} 
                            />
                        </GraphicWrapper>
                        <CommentChartContainer>
                            <CommentContainer>
                                <Comment/>
                            </CommentContainer>
                            <PieContainer>
                                <Pie data={pieData} />
                            </PieContainer>
                        </CommentChartContainer>
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
