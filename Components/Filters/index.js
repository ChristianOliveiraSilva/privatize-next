import React from 'react'
import { Content, InpStyle, DropStyle, FlexFilters, MiddleFilters } from './style'
import Flex from '../../Global/Style'
import Dropdown from '../Dropdown'
import Checkbox from '../Checkbox'
import Input from '../Input'
import Button from '../Button'

import { filterCompanies } from './helpers/filterHelpers'

function Filters () {
    const mostPopularButtonStyle = {
        marginLeft: '50px',
        height: '40px',
        width: '150px'
    }

    const orderButtonStyle = {
        marginLeft: '10px',
        height: '40px',
        width: '150px'
    }

    const flexConfig = {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

    return (
        <Content>
            <Flex {...flexConfig}>
                <Checkbox size="2" text="Empresas assinadas" />
                <MiddleFilters>
                    <Flex flexDirection="row">
                        <Button style={ mostPopularButtonStyle }
                            text='Mais populares'
                            selectable={ true }
                            selectedColor= '#76AE63'
                        />
                        <Button style={ orderButtonStyle }
                            text= 'Ordem Alfabética'
                            selectedColor= '#76AE63'
                            selectable= { true }
                        />
                    </Flex>
                </MiddleFilters>
                <div id="inputDiv">
                    <FlexFilters>
                        <InpStyle>
                            <Input
                                width="100%"
                                backgroundColor="white"
                                onChange={filterCompanies}
                                fontSize="15px"
                                placeholder="Empresa"
                            />
                        </InpStyle>
                        <DropStyle>
                            <Dropdown width="100%" height="100%" />
                        </DropStyle>
                    </FlexFilters>
                </div>
            </Flex>
        </Content>
    )
}

export default Filters
