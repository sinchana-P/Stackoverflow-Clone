import React from 'react' 
import { Link } from 'react-router-dom'

const Questions = ({question}) => { 
    return ( 
        <div className='display-question-container'> 
            <div className='display-votes-ans'> 
                <p>{(question.upVotes - question.downVotes)}</p> 
                {/* <p>{(question.upVotes.length - question.downVotes.length)}</p>  */}
                <p>votes</p> 
            </div> 
            <div className='display-votes-ans'> 
                <p>{question.no0fAnswers}</p> 
                <p>answers</p> 
            </div> 
            <div className="display-question-details"> 
                {/* JS INSIDE REACT */}
                <Link to={`/Questions/${question._id}`} className='question-title-link' >{question.questionTitle} </Link> 
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.questionTags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className='display-time'>
                        asked on {question.askedOn} {question.userPosted}
                    </p>
                </div>
            </div> 
        </div> 
)} 
                
export default Questions