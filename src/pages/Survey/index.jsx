import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Survey() {
    const { questionNumber } = useParams(); // lit l'URL et prend une nouvelle valeur à chaque changement
    const currentQuestion = parseInt(questionNumber, 10);

    const previousQuestionLink = currentQuestion === 1 ? '/survey/1' : `/survey/${currentQuestion - 1}`;
    const nextQuestionLink = `/survey/${currentQuestion + 1}`;

    return (
        <div>
            <h1>Questionnaire 🧮</h1>
            <h2>Question {currentQuestion}</h2>
            <nav>
                <Link to={previousQuestionLink}>Question précédente</Link>
                {currentQuestion === 10 ? (
                    <Link to="/results">Results</Link>
                ) : (
                    <Link to={nextQuestionLink}>Question suivante</Link>
                )}
            </nav>
        </div>
    );
}

export default Survey;
