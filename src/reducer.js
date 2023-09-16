const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_FIRST_NAME":
            return {
            ...state,
            firstName: action.payload,
            }

        case "CHANGE_LAST_NAME":
            return{
                ...state,
                lastName: action.payload,
            }
        case "CHANGE_EMAIL":
            return{
                ...state,
                email: action.payload,
            }
        case "CHANGE_BOD":
            return{
                ...state,
                dateOfBirth: action.payload,
            }
        case "CHANGE_GENDER":
            return{
                ...state,
                gender: action.payload,
            }
        case "CHANGE_PHONE":
            return{
                ...state,
                mobileNo: action.payload,
            }
        case "CHANGE_ADDRESS":
            return{
                ...state,
                address: action.payload,
            }
        case "CHANGE_COURSE":
            return{
                ...state,
                course: action.payload,
            }
        case "CHANGE_CITY":
            return{
                ...state,
                city: action.payload,
            }
        case "CHANGE_STATE":
            return{
                ...state,
                state: action.payload,
            }
        default: 
            return {
                ...state
            }
        
        
    }
}
    

export default reducer;
