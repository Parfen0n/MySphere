import * as actionTypes from '../constants/actionTypes';
import * as vacancyApi from '../api/vacancyApi';

export const getVacancies= () => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_GET_VACANCIES_STARTED
  })

  vacancyApi
    .getVacancies()
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const vacancies = JSON.parse(value);
              console.log(vacancies[0]);
              dispatch({
                type: actionTypes.ACTION_GET_VACANCIES_SUCCESS,
                vacancies
              });
            }
          );
      }
    )
}

export const createVacancy = (data) => (dispatch, getState) => {

  dispatch({
    type: actionTypes.ACTION_CREATE_VACANCY_STARTED
  })

  vacancyApi
    .createVacancy(data)
    .then(
      response => {
        response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              console.log(responseObject);
              dispatch({
                type: actionTypes.ACTION_CREATE_VACANCY_SUCCESS,
                vacancy: responseObject,
                vacancies: getState().vacancy.vacancies
              });
            }
          );
      }
    )
}