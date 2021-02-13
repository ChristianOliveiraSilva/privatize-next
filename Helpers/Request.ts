import axios, { AxiosPromise, Method } from 'axios'

export default function Request ( method : Method , url? : string , data? : any, config? : Object ) : AxiosPromise {
    return axios({
        method: method,
        url,
        data
    })
}

// dispatch(fetchUserPending())
//     fetch('https://api.github.com/repositories?since=364')
//         .then(res => res.json())
//         .then(res => {
//             if (res.error) {
//                 throw (res.error)
//             }
//             dispatch(fetchUserSuccess(res))
//             localStorage.setItem('logedIn', true)
//             return res.data
//         })
//         .catch(error => {
//             dispatch(fetchUserError(error))
//         })