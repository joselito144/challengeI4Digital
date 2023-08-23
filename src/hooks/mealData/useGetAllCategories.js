import getAllCategories from '../../helpers/getAllCategories'
import { useEffect, useState } from 'react'

const useGetAllCategories = () => {

  const [ data, setData ] = useState()
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getAllCategories().then((response) => {
      setData(response)
      setIsLoading(false)
    })
  }, [])

  return {
    data,
    isLoading,
  }
}

export default useGetAllCategories