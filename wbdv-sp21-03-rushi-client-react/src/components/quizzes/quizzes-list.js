import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import QuizService from '../../services/quiz-service'

const QuizzesList = () => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        QuizService.findAllQuizzes()
            .then((quizzes) => setQuizzes(quizzes))
    }, [courseId])
    return(
        <div className="container">2
            <h2>Quizzes</h2>
            <ul className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <li key={quiz._id}
                                className={"list-group-item"}>
                                <Link
                                    to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    {quiz.title}
                                </Link>
                                <Link
                                    className={"btn btn-primary float-right"}
                                    to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                    Start
                                </Link>

                                <Link
                                    className={"btn btn-success float-right mr-2"}
                                    to={`/courses/${courseId}/quizzes/${quiz._id}/attempts`}>
                                    Show previous attempts
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default QuizzesList;
