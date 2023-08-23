import MEALAPI from '../api/MealApi'

const getAllCategories = async () => {
  const result = await MEALAPI()
    .get(`list.php?c=list`)
    .catch((error) => {
      return error.response ? error.response : error
    })
  if (result.status !== 200 && result.status !== 204) {
    return {}
  }

  return result.data
}


export default getAllCategories