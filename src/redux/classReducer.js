const initialState = {
    classes: [],
    class: {},
    error: null
}

export default function classReducer (state = initialState, action) {
    switch (action.type) {
        case 'FETCH_CLASSES':
            return {
                ...state,
                classes: action.payload.classes
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                error: action.payload
            }
    
        default:
            return state;
    }
}