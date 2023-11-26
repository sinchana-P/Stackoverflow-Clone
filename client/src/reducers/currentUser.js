// here, it is empty state

const currentUser = (state = null, action) => {
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            return action.payload;
            // will pass this data via "REDUCER", using "ACTION" (actions/currentUser.js) & we store it in a "STORE".

        default:
            return state;
    }
}


export default currentUser;