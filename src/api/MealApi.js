import axios from 'axios'


export const MEALAPI = () => {
  
  let headers = {}
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_MEAL,
    headers,
  })


  return instance
}

export default MEALAPI