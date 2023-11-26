import React from 'react'
// import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { useParams,Link } from 'react-router-dom';
import './Questions.css'
import Avatar from '../../components/Avatar/Avatar'
import DisplayAnswers from './DisplayAnswers';
import { useSelector } from 'react-redux';


const QuestionsDetails = () => {

    // consider using useParams as object
    const { id } = useParams();
    const questionsList = useSelector(state => state.questionReducer)

    // console.log(id)
    // const id = 2 ;

    // var questionsList = [{  
    //     _id: '1', 
    //     upVotes: 3, 
    //     downVotes: 2,
    //     no0fAnswers: 2, 
    //     questionTitle: "What is a function-1?", 
    //     questionBody: "Ans 1", 
    //     questionTags: ["java","node js","react js"], 
    //     userPosted: "Sinch",
    //     userId:1, 
    //     askedOn: "jan 1" ,
    //     answer: [{
    //       answerBody: "Answer What is a function-1What is a function-1What is a function-1What is a function-1What is a function-1What is a function-1What is a function-1What is a function-1",
    //       userAnswered: "lily",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     },
    //     {
    //       answerBody: "Answer 2",
    //       userAnswered: "lily",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }
    //   ]
    //   },{
    //     _id: '2', 
    //     upVotes: 3, 
    //     downVotes: 2,
    //     no0fAnswers: 2, 
    //     questionTitle: "What is a function-2?", 
    //     questionBody: "Ans 2", 
    //     questionTags: ["java","node js","react js"], 
    //     userPosted: "Sinch",
    //     userId:1, 
    //     askedOn: "jan 1" ,
    //     answer: [{
    //       answerBody: "Answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //   },{
    //     _id: '3', 
    //     upVotes: 3, 
    //     downVotes: 2,
    //     no0fAnswers: 2, 
    //     questionTitle: "What is a function-3?", 
    //     questionBody: "Ans 3", 
    //     questionTags: ["java","node js","react js"], 
    //     userPosted: "Sinch",
    //     userId:1, 
    //     askedOn: "jan 1" ,
    //     answer: [{
    //       answerBody: "Answer",
    //       userAnswered: "kumar",
    //       answeredOn: "jan 2",
    //       userId: 2
    //     }]
    //   }]

      // const res = questionsList.filter(question => question._id === id)
      // console.log(res)
      // res.map(question => (
      //   console.log(question.questionTitle)
      // ))
  return (
    <div className='question-details-page'>
    {
        questionsList.data === null ?
        (<h1>Loading...</h1>) : (
        <> 
            {
              questionsList
              .data
              .filter((question) => question._id === id)
              .map((question) => (
                <div key={question._id}>
              
              {/* section 1 starts */}

                  <section className="question-details-container">
                    <h1>{question.questionTitle}</h1>
                    <div className="question-details-container-2">
                      <div className="question-votes">
                        <i class="fa-solid fa-caret-up fa-2x" id='votes-icon'></i>
                        <p>{question.upVotes - question.downVotes}</p>
                        <i class="fa-solid fa-caret-down fa-2x"id='votes-icon'></i>
                      </div>
                      <div style={{width : "100%"}}>
                          <p className='question-body'>{question.questionBody}</p>
                          <div className="question-details-tags">
                              {
                                question.questionTags.map((tag) => (
                                  <p key={tag}>{tag}</p>
                                ))
                              }
                          </div>
                          <div className="question-actions-user">
                            <div>
                              <button type='button'>Share</button>
                              <button type='button'>Delete</button>                                  
                            </div>
                            <div>
                              <p>asked {question.askedOn}</p>
                              <Link to={`/User/${question.userId}`} className='user-link ques-user-link' style={{color:'#0086d8'}}>
                                <Avatar backgroundColor='orange' px='12px' py='6px' borderRadius='4px' color="white">{question.userPosted.charAt(0).toUpperCase()}</Avatar>  
                                <div>
                                  {question.userPosted}
                                </div>
                              </Link>
                            </div>
                          </div>
                      </div>
                    </div>
                    </section>

              {/* section 2 starts */}
                    {
                      question.no0fAnswers !== null && (
                        <section>
                            <h3>{question.no0fAnswers} answers</h3>
                            <DisplayAnswers key={question._id} question={question} />
                        </section>
                      )
                    }

              {/* section 3 starts */}
                  <section className='post-ans-container'>
                      <h3>Your Answer</h3>
                      <form action="">
                        <textarea name="" id="" cols="30" rows="10"></textarea><br />
                        <input type="Submit" className='post-ans-btn' value="Post Your Answer" />
                      </form>
                      <p>
                        Browse other Question tagged
                        {
                          question.questionTags.map((tag) => (
                            <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                          ))
                        } or 
                        <Link to='/AskQuestion' style={{textDecoration:"none", color:"#009dff"}}> ask your own question</Link>
                      </p>
                  </section> 

                </div>
              ))
            }
        </>
        )
    }
    </div>
  )
}

export default QuestionsDetails



/*

3 sections :

1. for question
2. for answers posted
3. to post/write answer

// note :

_id: '1'  ===>>>>>   id values are in string here.
note that all the values from backend will be in string format





*/
