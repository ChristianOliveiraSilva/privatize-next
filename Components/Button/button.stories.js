import React from 'react'
import { action } from '@storybook/addon-actions'
import {
    withKnobs,
    text,
    boolean,
    object
} from '@storybook/addon-knobs'
import '@storybook/addon-notes'
import Flex from '../../Global/Style'
import Button, { SMALL, MEDIUM, BIG, EXTRA } from './index'

export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs],
    parameters: {
        notes: 'some documentation here'
    }
}

export const standard = () =>

    <Button
        size= {text('size', SMALL)}
        onClick= {action('clicked')}
        hoverColor= {text('hoverColor', 'white')}
        hoverBackgroundColor= {text('hoverBackgroundColor', 'gray')}
        rounded= {boolean('rounded', false)}
        text={text('text', 'Button')}
        backgroundColor= {text('backgroundColor', '#D3D3D3')}
        textColor= {text('textColor', '#FFFF')}
        style={object('style', { marginLeft: '0px', marginTop: '0px' })}
    />

export const diferentColors = () => (
    <Flex flexDirection="row">
        <Button backgroundColor={'red'} text="Button" />
        <Button backgroundColor={'blue'} text="Button" />
        <Button backgroundColor={'green'} text="Button" />
        <Button backgroundColor={'brown'} text="Button" />
        <Button backgroundColor={'purple'} text="Button" />
        <Button backgroundColor={'white'} text="Button" />
        <Button backgroundColor={'gray'} text="Button" />
        <Button backgroundColor={'pink'} text="Button" />
    </Flex>
)

export const diferentSizes = () => (
    <Flex flexDirection="row">
        <Button size={SMALL} text="Button" />
        <Button size={MEDIUM} text="Button" />
        <Button size={BIG} text="Button" />
        <Button size={EXTRA} text="Button" />
    </Flex>
)
