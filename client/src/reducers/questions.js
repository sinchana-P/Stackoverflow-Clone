const questionReducer = (state = {data: null}, action) => {
    switch (action.type) {
        case "POST_QUESTION":
            // return { ...state, data: action.payload }    // no payload data here
            return { ...state } 
            // break;
        case "FETCH_ALL_QUESTIONS":
            return { ...state, data: action.payload }
        default: 
            return state
            // break;
    }
}

export default questionReducer;