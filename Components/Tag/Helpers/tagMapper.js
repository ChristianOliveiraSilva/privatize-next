import tagConstants from './tagConstants'

const { tagTypes } = tagConstants

export default {
    [tagTypes.AGAINST]: {
        text: 'Contra',
        color: '#FD9898'
    },
    [tagTypes.COMPLAINT]: {
        text: 'Reclamação',
        color: 'lightblue'
    },
    [tagTypes.COMPLIMENT]: {
        text: 'Elogio',
        color: '#DA98FD'
    },
    [tagTypes.EXPERIENCE]: {
        text: 'Experiência',
        color: 'lightgreen'
    },
    [tagTypes.IN_FAVOR]: {
        text: 'A favor',
        color: 'lightgray'
    },
    [undefined]: {
        text: '',
        color: undefined
    }
}
