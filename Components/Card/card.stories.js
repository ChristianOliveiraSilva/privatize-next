import React from 'react'
import Card from './index'
import { withKnobs } from '@storybook/addon-knobs'
import '@storybook/addon-notes'

export default {
    title: 'Card',
    component: Card,
    decorators: [withKnobs]
}

export const standard = () => (
    <Card />
)
