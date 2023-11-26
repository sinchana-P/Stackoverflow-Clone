import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'


const HomeMainbar = () => {

const location = useLocation()
// const user = 1;
// const navigate = useNavigate()


const questionsList = useSelector(state => state.questionReducer)
console.log(questionsList)

// entire array is renamed as data.
// so our questionsList object is having data only.
// questionsList.data

// output starts:
// {
// 👉{data: Array(4)}
// data
// : 
// Array(4)
// 0: 
// answer: 
// []
// askedOn:
// "2023-06-29T15:25:24.562Z"
// downVote:
// []
// noOfAnswers:
// 0
// questionBody:
// "Quis ab itaque fugit"
// questionTags:
// ['Cupidatat amet sed ']
// questionTitle:
// "Eos molestias in re"
// upVote:
// []
// userPosted:
// "Sofia"
// __v:
// 0
// _id:
// "649da264639e8bbac7069dbe"
// [[Prototype]]:
// Object
// 1:
// {_id: '649da499ec5cb9b20108842b', questionTitle: 'Voluptas fugiat vel ', questionBody: 'Numquam distinctio ', questionTags: Array(5), noOfAnswers: 0, …}
// 2:
// {_id: '649da915bc756895f8ccbfd8', questionTitle: 'Quo voluptatem ut m', questionBody: 'Alias dolore Nam dol', questionTags: Array(3), noOfAnswers: 0, …}
// 3:
// {_id: '649e737d6f1ff19ffd105678', questionTitle: 'Sint est laudantium', questionBody: 'Assumenda corrupti ', questionTags: Array(4), noOfAnswers: 0, …}
// length:
// 4
// }
// output ends:


// var questionsList = [{  
//     _id: 1, 
//     upVotes: 3, 
//     downVotes: 2,
//     no0fAnswers: 2, 
//     questionTitle: "What is a function?", 
//     questionBody: "Ans 1", 
//     questionTags: ["java","node js","react js"], 
//     userPosted: "Sinch",
//     userId:1, 
//     askedOn: "jan 1" ,
//     answer: [{
//       answerBody: "Answer",
//       userAnswered: "kumar",
//       answeredOn: "jan 2",
//       userId: 2
//     }
//   ]
//   },{
//     _id: 2, 
//     upVotes: 3, 
//     downVotes: 2,
//     no0fAnswers: 2, 
//     questionTitle: "What is a function?", 
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
//     _id: 3, 
//     upVotes: 3, 
//     downVotes: 2,
//     no0fAnswers: 2, 
//     questionTitle: "What is a function?", 
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


// const checkAuth = () => {
//   if(user == null){
//     alert("login or signup to ask a question")
//     navigate('/Auth')
//   }else{
//     navigate('/AskQuestion')
//   }
// }

  return (
    <div className='main-bar'>
      <div className="main-bar-header">
          {
            location.pathname === '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
          }
          <Link to='/AskQuestion' className='ask-btn'>Ask Question</Link>
          {/* <button onClick={checkAuth} className='ask-btn'>Ask Question</button> */}
      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading...</h1> : 
          <>
            <p>{ questionsList.data.length } questions</p>
            <QuestionList questionsList = {questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar
