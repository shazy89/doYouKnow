import { GET_QUESTIONS, UPDATE_ANSWER, NEXT_QUESTION } from './types';
import data from 'api/local/questions.json';

const questionsRequest = (select = 'me') => {
  return new Promise((resolve, reject) => {
    const mock = data;

    if (!mock) {
      reject('not found');
    }
    resolve(mock);
  });
};

export const setQuestions = () => (dispatch) => {
  questionsRequest()
    .then((results) => {
      dispatch({
        type: GET_QUESTIONS,
        payload: results,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUsersAnswer = (answer) => (dispatch) => {
  dispatch({
    type: UPDATE_ANSWER,
    payload: answer,
  });
};

export const updatTheNextQuestion = (data) => (dispatch) => {
  dispatch({
    type: NEXT_QUESTION,
    payload: data,
  });
};
