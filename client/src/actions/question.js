// import React from 'react'
import * as api from '../api'


// this askQuestion, gets triggered whenever I click "Review your question" BUTTON to review. 
export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData) 
        // using api, we send the questionData to the backend, of respective url.

        console.log("data : " + {data});
        dispatch({ type: "POST_QUESTION", payload: data })
        // dispatch() : will re-run all the "fetchAllQuestions"
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        console.log(error)
        // "message": "Request failed with status code 404",
        // "name": "AxiosError",
        // "stack": "AxiosError: Request failed with status code 404\n    at settle (http://localhost:3000/static/js/bundle.js:56032:12)\n    at XMLHttpRequest.onloadend (http://localhost:3000/static/js/bundle.js:54723:66)",
    
    }
} 

// but fetchAllQuestions, can't be triggered using button or any other, questions should be displayed automatically.
// So, we use "useEffect" in "App.js"

// dispatching data to redux "store"
export const fetchAllQuestions = () => async (dispatch) => {
    try{
        // get all questions list from the backend
        const { data } = await api.getAllQuestions()
        dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data })
    }
    catch (error){
        console.log(error)
    }
}

// export default askQuestion
