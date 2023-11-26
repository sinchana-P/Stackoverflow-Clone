import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';   /* or useNavigate */
import { useNavigate } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'; 
// import { Link,useLocation } from 'react-router-dom'

// import { useDispatch, useSelector } from 'react-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './AskQuestion.css'

import { askQuestion } from '../../actions/question'                                        

const AskQuestion = () => {

    const [ questionTitle, setQuestionTitle ] = useState('');
    const [ questionBody, setQuestionBody ] = useState('');
    const [ questionTags, setQuestionTags ] = useState('');

    const user = 1;
    // const history = useHistory();
    const navigate = useNavigate()   
    const dispatch = useDispatch()   
    const User = useSelector((state) => (state.currentUserReducer))  

    const redirect = () => {
        alert("login or signup to ask a question");
        // history.push('/Auth');
        navigate('/Auth');
    }

    const handleSubmit = (e) => {    
        e.preventDefault()
        console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name }, navigate))
    }                   

    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

  return (
    <>
        {
            user == null ?
            redirect():
            <div className='ask-question'>
                <div className="ask-ques-container">
                    <h1>Ask a public Question</h1>

                    <form action="" onSubmit={handleSubmit}> 

                        <div className="ask-form-container">
                            <label htmlFor="ask-ques-title">
                                <h4>Title</h4>
                                <p>Be specific and imagine your are asking a question to another person</p>
                                <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. Is there an R function for finding the index of an element in a vector ?'/>
                            </label>
                            <label htmlFor="ask-ques-body">
                                <h4>Body</h4>
                                <p>Include all the information someone would need to answer your question</p>
                                <textarea id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyPress={handleEnter} >Body</textarea>
                            </label>
                            <label htmlFor="ask-ques-tags">
                                <h4>Tags</h4>
                                <p>Add upto 5 tags to describe what your question is about</p>
                                <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTags(e.target.value.split(' '))}} placeholder='e.g. ( XML Typescript wordpress )'/>
                            </label>
                        </div>
                        <input className='review-btn'  type="submit" value='Review your question'/>
                    
                    </form>
                </div>
            </div>
        }
    </>
  )
}

export default AskQuestion


// note:
/*
In form 'htmlFor' and 'id' should be same


*/
