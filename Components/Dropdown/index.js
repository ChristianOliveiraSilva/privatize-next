import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' }
]

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}
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
}

const formatGroupLabel = (data) => (
    <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
)

const customStyles = {
    option: (provided, state) => ({
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
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1
        const transition = 'opacity 300ms'

        return { ...provided, opacity, transition }
    }
}

const Dropdown = (props) => (
    <div style={{ width: props.width, height: props.height }}>
        <Select
            defaultValue={colourOptions[1]}
            options={colourOptions}
            styles={customStyles}
            formatGroupLabel={formatGroupLabel}
        />
    </div>
)

Dropdown.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string
}

export default Dropdown
