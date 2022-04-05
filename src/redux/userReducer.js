const initialState = {
    user: {},
    isAuthenticated: false
}

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: action.payload.auth
            }
        case 'LOGIN_ERROR': 
            return {
                ...state,
                user: action.payload.user,
                isAuthenticated: action.payload.auth

            }
        default:
            return state
    }
}