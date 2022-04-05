import axios from "axios";


export const login = (url) => {
    return dispatch => {
        return  axios
                .get(url, {withCredentials: true})
                .then(res => {
                    return dispatch({
                        type: 'LOGIN_USER',
                        payload: {
                            user: res.data,
                            auth: true
                        }
                        
                    })
                })
                .catch(err => {
                    console.log(err, '<<<')
                    return dispatch({
                        type: 'LOGIN_ERROR',
                        payload: {
                            user: null,
                            auth: false
                        }
                    })

                })
    }
}

export const fetchClasses = (url) => {
    return dispatch => {
        return axios 
                .get(url)
                .then(res => {
                    return dispatch({
                        type: 'FETCH_CLASSES',
                        payload: {
                            classes: res.data.data
                        }
                    })
                })
                .catch(err => {
                    return dispatch({
                        type: 'FETCH_ERROR',
                        payload: err
                    })
                })
    }
}