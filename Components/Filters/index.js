import React from 'react'
import { FiltersBase, InpStyle, DropStyle, FlexFilters, SelectableButtons } from './style'
import Flex from '../../Global/Style'
import Dropdown from '../Dropdown'
import Checkbox from '../Checkbox'
import Input from '../Input'
import Button from '../Button'

import { filterCompanies } from './helpers/filterHelpers'

const selectableButtonStyle = {
    height: '40px',
    width: '200px',
    border: 'solid 0.5px lightgray'
}

const checkboxTextStyle = {
    fontSize: '20px'
}

function Filters () {
    return (
        <FiltersBase>
            <SelectableButtons>
                <Button style={ selectableButtonStyle }
                    text= 'Assinados'
                    backgroundColor='white'
                    fontSize='20px'
                    fontColor='gray'
                    selectedColor= '#76AE63'
                    selectedFontColor= 'white'
                    selectable= { true }
                />
                <Button style={ selectableButtonStyle }
                    text='Mais populares'
                    backgroundColor='white'
                    fontSize='20px'
                    fontColor='gray'
                    selectedColor= '#76AE63'
                    selectedFontColor= 'white'
                    selectable={ true }
                />
                <Button style={ selectableButtonStyle }
                    text= 'Ordem Alfabética'
                    backgroundColor='white'
                    fontSize='20px'
                    fontColor='gray'
                    selectedColor= '#76AE63'
                    selectedFontColor= 'white'
                    selectable= { true }
                />
            </SelectableButtons>
            <div id="inputDiv">
                <FlexFilters>
                    <InpStyle>
                        <Input
                            id="inputFilter"
                            width="100%"
                            backgroundColor="white"
                            onChange={filterCompanies}
                            fontSize="12px"
                            placeholder="Empresa"
                        />
                    </InpStyle>
                    <DropStyle>
                        <Dropdown width="100%" height="100%" />
                    </DropStyle>
                </FlexFilters>
            </div>
        </FiltersBase>
    )
}

export default Filters
