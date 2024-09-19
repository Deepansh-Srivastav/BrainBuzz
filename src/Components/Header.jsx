import quizLogo from "../Assets/quiz-logo.png"

function Header() {
    return (
        <header>

            <img src={quizLogo} alt="Quiz Logo Icon" />
            <h1>ReactQuiz</h1>

        </header>
    )
}

export default Header