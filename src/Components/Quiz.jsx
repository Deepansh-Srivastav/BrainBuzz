import { useState } from "react"
import QUESTIONS from "../Data/questions"

const Quiz = () => {

    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length

    function handleSelectedAnswer(newAnswer) {

        setUserAnswers((currentListOfAnswers) => {

            return [...currentListOfAnswers, newAnswer]

        })
    }

    return (
        <div id="quiz">
            <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

            <ul id="answers">
                {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
                    return (<li key={answer} className="answer">
                        <button onClick={() => {
                            handleSelectedAnswer(answer)
                        }}>{answer}</button>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Quiz
