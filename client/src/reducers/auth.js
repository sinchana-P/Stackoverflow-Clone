// state = {data: null}

const authReducer = (state = {data: null}, action) => {
    switch (action.type) {
        case "AUTH":
            localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
            return { ...state, data: action?.data };
            
        default:
            return state;
    }
}

export default authReducer;




// open :
// Pages ---> Auth ---> Auth.jsx


// there r three types of storage, where Browser can store the data
// Cookie
// Session
// localStorage



// { ...action?.data }:
// ?
// is an Optional Operator
// 