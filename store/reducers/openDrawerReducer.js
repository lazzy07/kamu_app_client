const initialState = {
    openDrawer: false
}

export const openDrawerReducer = (state=initialState, action) => {
    switch(action.type){
        case 'OPEN_DRAWER':
            return true

        case 'CLOSE_DRAWER':
            return false

        default:
            return state;
    }
}