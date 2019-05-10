import * as urls from '../constants/urls'; 
 
export const getVacancies = () => (
    fetch(
      urls.VACANCIES_URL,
      {
        method: 'GET',
      }
    )
  )

export const getVacancy = (vacancyId) => (
    fetch(
        urls.VACANCY_URL + vacancyId,
        {
        method: 'GET',
        }
    )
)
    
  export const createVacancy = (data) => (
    fetch(
      urls.VACANCIES_URL,
      {
        method: 'POST',
        body: JSON.stringify({
          title: data.title,
          body: data.body,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8;"
        }
      }
    )
  )