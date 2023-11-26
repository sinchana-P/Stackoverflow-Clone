import * as api from '../api'                                                              
import { setCurrentUser } from './currentUser';

//1. in Auth.jsx :                                                                           
// dispatch(signup( { name, email, password }, navigate))                                   
 
//2. in api/index.js :                                                                       
// export const signUp = (authData) => API.post('/user/signup', authData)                  
 
// 3.
// export const signup = (authData, navigate) => async (dispatch) => {                        
//     try{                                                                                    
//         // { data }  : we are receiving response (result [new user/existing user] & token) from database, after sending authData to the database
//         //       3.    &            1.         // 2. in   --> api/index.js          
//         const { data } = await api.signUp(authData);   
//         // authData  --->  is sent to backend, with post req --->    /user/signup                                          
//         console.log(data); 
//         // action ---> { type: 'AUTH', data }
//         dispatch({ type: 'AUTH', data });                                                                
//         navigate('/');    // after login , to redirect directly to home page. We use navigate
//     }catch(error){
//         console.log(error);                                                                                                                                                                                                                                                 
//     }
// }

// export const login = (authData, navigate) => async (dispatch) => {
//     try{
//         // { data }  : we are receiving response (result [new user/existing user] & token) from database, after sending authData to the database
//         //       3.    &            1.             // 2. in   --> api/index.js
//         const { data } = await api.logIn(authData)                                
//         dispatch({ type: 'AUTH', data })                                        
//         navigate('/')    // after login , to redirect directly to home page. We use navigate
//     }catch(error){
//         console.log(error)
//     }
// }

// 👉 this file is imported in ---> Pages/Auth/Auth.jsx

// open file :
// Auth --> Auth.jsx


// Redux thunk:
// is used to do asynchronous action in Redux

export const signup = (authData, navigate) => async (dispatch) => {                        
    try{                                                                                    
        const { data } = await api.signUp(authData);   
        console.log(data); 
        dispatch({ type: 'AUTH', data });  
        // dispatches only (once) when user logged in. It's gone after REFRESH.        
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));  // Navbar.jsx                                                       
        navigate('/');    
    }catch(error){
        console.log(error);                                                                                                                                                                                                                                                 
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try{
        const { data } = await api.logIn(authData)                                
        dispatch({ type: 'AUTH', data })     
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));  // Navbar.jsx                                                                                          
        navigate('/')    
    }catch(error){
        console.log(error)
    }
}