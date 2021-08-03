import { store } from 'react-notifications-component'

export default {
    validateCommentText: (text) => {
        if (text && text !== '') {
            return true
        }

        store.addNotification({
            title: 'Atenção',
            message: 'Escreva algo para comentar',
            type: 'warning',
            insert: 'top',
            container: 'top-right',
            animationIn: ['animate__animated', 'animate__fadeIn'],
            animationOut: ['animate__animated', 'animate__fadeOut'],
            dismiss: {
                duration: 2000,
                onScreen: true
            }
        })

        return false
    }
}