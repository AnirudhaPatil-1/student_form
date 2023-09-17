const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FIRST_NAME":
            return {
            ...state,
            firstName: action.payload,
            }

        default: 
            return {
                ...state
            }
        
        
    }
}
    

export default reducer;
