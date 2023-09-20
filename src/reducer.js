const ADD_STUDENT = 'ADD_STUDENT';

const registrationDataReducer = (state, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return [...state, action.payload]
            

        default: 
            return {
                state
            }
        
        
    }
}
    

export {ADD_STUDENT, registrationDataReducer};
