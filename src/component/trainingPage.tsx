import React, { useState } from 'react';
import SiteHeader from './siteHeader';
import { fetchVerbs } from '../model/verb';
import { Verb } from '../model/verb';
import QuestionCard from './questionCard';
import ResultTable from './resultTable';

const arrayAnswers: Array<AnswerPair> = [];
const totalSteps = 10;

export class AnswerPair {
    v2: string;
    v3: string;
    constructor(SimplePast: string, PastParticiple: string) {
        this.v2 = SimplePast;
        this.v3 = PastParticiple;
    }
}

function TrainingPage(): JSX.Element {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<Verb[]>([]);
    const [questionNr, setQuestionNr] = useState(0);
    const [userAnswerV2, setUserAnswerV2] = useState('');
    const [userAnswerV3, setUserAnswerV3] = useState('');
    const [gameOver, setGameOver] = useState(true);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [answersRecorded, setAnswersRecorded] = useState(false);

    const start = async () => {
        setLoading(true);
        setGameOver(false);
        setTotalQuestions(totalSteps);
        const shuffledArray = await fetchVerbs();
        const verbsReadyToTest = shuffledArray.slice(0, totalSteps);
        setQuestionNr(0);
        setQuestions(verbsReadyToTest);
        setAnswersRecorded(false);
        arrayAnswers.length = 0;
        setTimeout(() => setLoading(false), 1000);
    };

    const handleChangeV2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswerV2(e.target.value);
    };

    const handleChangeV3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswerV3(e.target.value);
    };

    const nextQuestion = () => {
        const nextQ = questionNr + 1;
        if (nextQ === totalQuestions) {
            setGameOver(true);
        } else {
            setQuestionNr(nextQ);
            arrayAnswers.push(new AnswerPair(userAnswerV2, userAnswerV3));
            setUserAnswerV2('');
            setUserAnswerV3('');
        }
    };

    const checkAnswer = () => {
        arrayAnswers.push(new AnswerPair(userAnswerV2, userAnswerV3));
        setAnswersRecorded(true);
        setUserAnswerV2('');
        setUserAnswerV3('');
    };

    const isNotLastQuestion = (): Boolean => {
        return !gameOver && !loading && questionNr !== totalQuestions - 1;
    };

    const quizInProgress = (): Boolean => {
        return !loading && !gameOver && !answersRecorded;
    };

    const isLastNotRecordedQuestion = (): Boolean => {
        return !loading && questionNr === totalQuestions - 1 && !answersRecorded;
    };

    return (
        <div>
            <SiteHeader />
            <section className="content1">
                {gameOver ? (
                    <button onClick={start}>
                        start
                    </button>
                ) : null}

                {loading && <p className='loading'>Loading ...</p>}

                {quizInProgress() && (
                    <QuestionCard question={questions[questionNr]} callbackV2={handleChangeV2} callbackV3={handleChangeV3} userAnswerV2={userAnswerV2} userAnswerV3={userAnswerV3} questionNr={questionNr} totalQuestions={totalQuestions} />
                )}

                {isNotLastQuestion() ? (
                    <button className='next' onClick={nextQuestion}>
                        Next question
                    </button>
                ) : null}

                {isLastNotRecordedQuestion() ? (
                    <button className='result' onClick={checkAnswer}>Result</button>
                ) : null}
            </section>
            {answersRecorded && (
                <div>
                    <section className="content1">
                        <button className='start-over' onClick={start}>Start over</button>
                    </section>
                    <ResultTable verbList={questions} answerList={arrayAnswers} />
                </div>
            )}
            <div className="footer"></div>
        </div>
    )
}

export default TrainingPage;