import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const colourOptions = [
    {value: 'Opção 1', label: 'Em breve'},
    {value: 'Opção 2', label: 'Opção 2'},
    {value: 'Opção 3', label: 'Opção 3'},
    {value: 'Opção 4', label: 'Opção 4'},
    {value: 'Opção 5', label: 'Opção 5'},
    {value: 'Opção 6', label: 'Opção 6'},
    {value: 'Opção 7', label: 'Opção 7'},
    {value: 'Opção 8', label: 'Opção 8'},
    {value: 'Opção 9', label: 'Opção 9'},
    {value: 'Opção 10', label: 'Opção 10'}
]

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
} as React.CSSProperties

const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center'
} as React.CSSProperties

const formatGroupLabel = (data : {options: {length: Function}, label: string}) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
)

const customStyles = {
    option: (provided : object , state : {isSelected: boolean}) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'blue',
        cursor: 'pointer'
    }),
    control: () => ({
        display: 'flex',
        backgroundColor: 'white',
        cursor: 'pointer',
        border: 'solid 0.5px lightgray',
        height: 43
    }),
    singleValue: (provided : object , state : {isDisabled: boolean}) => {
        const opacity = state.isDisabled ? 0.5 : 1
        const transition = 'opacity 300ms'

        return { ...provided, opacity, transition }
    }
}

interface DropdownProps {
    width?: string,
    height?: string
}

const Dropdown: React.FC<DropdownProps> = (props) => (
    <div style={{ width: props.width, height: props.height }}>
        <Select
            defaultValue={colourOptions[0]}
            options={colourOptions}
            styles={customStyles}
            isDisabled={true}
            formatGroupLabel={formatGroupLabel}
        />
    </div>
)

Dropdown.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}

export default Dropdown
