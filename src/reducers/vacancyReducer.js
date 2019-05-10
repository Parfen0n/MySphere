import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const vacancies = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_VACANCIES_SUCCESS:
      return action.vacancies;
    case actionTypes.ACTION_CREATE_VACANCY_SUCCESS:
      return [...action.vacancies, action.vacancy];
    case actionTypes.ACTION_GET_VACANCIES_STARTED:
    case actionTypes.ACTION_GET_VACANCIES_FAILED:
      return [];
    default:
      return state;
  }
};

const firstVacancy = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_GET_VACANCIES_SUCCESS:
      return action.vacancies[0];
    default:
      return state;
  }
}


const vacancy = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ACTION_CREATE_VACANCY_SUCCESS:
      return action.vacancy;
    case actionTypes.ACTION_CREATE_VACANCY_STARTED:
      return {};
    default:
      return state;
  }
};

const vacancyReducer = combineReducers({
    vacancies,
    firstVacancy,
    vacancy
});

export default vacancyReducer;