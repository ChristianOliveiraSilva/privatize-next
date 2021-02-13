import { alertTypes } from './sharedConstants'

export const alertStyle = {
    [alertTypes.ERROR]: {
        border: 'solid 1px red',
        backgroundColor: '#FFFFFF'
    },
    [alertTypes.WARNING]: {
        border: 'solid 1px orange',
        backgroundColor: '#FFFFFF'

    },
    [alertTypes.SUCCESS]: {
        border: 'solid 1px green',
        backgroundColor: '#FFFFFF'
    }
}
