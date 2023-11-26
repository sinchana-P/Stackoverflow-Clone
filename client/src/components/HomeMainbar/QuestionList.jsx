import React from 'react'
import Questions from './Questions'

const QuestionList = ({questionsList}) => {
  return (
    <>
        {
            // document.write(props.questionsList[2])
           questionsList.map((question) => (
                <Questions question={question} key={QuestionList.id} />
           )) 
        }
    </>
  )
}

export default QuestionList