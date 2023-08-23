import MEALAPI from '../api/MealApi'

const getByName = async (name) => {
  const result = await MEALAPI()
    .get(`search.php?s=${name}`)
    .catch((error) => {
      return error.response ? error.response : error
    })
  if ((result.status !== 200 && result.status !== 204) || result.data.meals == null) {
    return []
  }

  return result.data
}


export default getByName