import MEALAPI from '../api/MealApi'

const getAllByArea = async (area) => {
  const result = await MEALAPI()
    .get(`filter.php?a=${area}`)
    .catch((error) => {
      return error.response ? error.response : error
    })
  if (result.status !== 200 && result.status !== 204) {
    return {}
  }

  return result.data
}


export default getAllByArea