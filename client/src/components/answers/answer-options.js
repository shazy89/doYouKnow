import React, { useState, useRef } from 'react';
import { answerTypes } from '../../infrastructure/questionsStyle';
import { checkAnswer } from 'helpers/helper-functions';
export const Option = ({
  option,
  correctAnswer,
  setQuestionInfo,
  questionInfo,
}) => {
  const [show, setShow] = useState(false);
  const inputEl = useRef(null);

  const onButtonClick = () => {
    const select = inputEl.current;
    setQuestionInfo({
      ...questionInfo,
      isCorrect: checkAnswer(select.innerText, correctAnswer),
    });
    checkAnswer(select.innerText, correctAnswer)
      ? (select.className = `app_option ${show ? 'show' : ''} ${
          answerTypes.correct
        } `)
      : (select.className = `app_option ${show ? 'show' : ''} ${
          answerTypes.incorrect
        }`);
  };

  return (
    <span
      ref={inputEl}
      onClick={onButtonClick}
      onAnimationEnd={() => setShow(true)}
      className={`app_option ${show ? 'show' : ''}`}
    >{`${option}`}</span>
  );
};
