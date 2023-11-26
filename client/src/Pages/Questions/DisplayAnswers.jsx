import React from 'react'
import Avatar from '../../components/Avatar/Avatar'
import { Link } from 'react-router-dom';
import './Questions.css'

const DisplayAnswers = ({question}) => {
  var count = 10;
  function myColor() {
    count = count + 81;
  }
  return (
    <div>
      {
          question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
            {
              myColor()
            }
              <p>{ans.answerBody}</p>
            <div className='info-row'>         
              <div className='question-actions-user'>
                  <button type='button'>Share</button>
                  <button type='button'>Delete</button>
              </div>
              <div>
                <p>answered {ans.answeredOn}</p>
                <Link to={`/User/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                    <Avatar backgroundColor={`#${count}${count}ac`} px='12px' py='6px' borderRadius='2px' color="white">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>  
                    <div >
                      {ans.userAnswered} 
                    </div>
                </Link>
              </div>
            </div>
          </div>
          ))
      }
    </div>
  )
}

export default DisplayAnswers
