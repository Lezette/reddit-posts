const initialState = [];

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUB_REDDIT': 
        return action.payload
        default:
            return state;
    }
}

export const sortedState = (state = {}, action) => {
    switch (action.type) {
        case 'SORT_SUB_REDDIT':
        return action.payload
        default:
            return state;
    }
}

export const request = (state = false, action) => {
    switch (action.type) {
        case 'REQUEST':
        return action.payload
        default:
            return state;
    }
}
