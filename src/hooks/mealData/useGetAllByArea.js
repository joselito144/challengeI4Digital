import getAllByArea from '../../helpers/getAllByArea'
import { useEffect, useState } from 'react'

const useGetAllByArea = (area) => {

  const [ data, setData ] = useState()
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    getAllByArea(area).then((response) => {
      setData(response)
      setIsLoading(false)
    })
  }, [area])

  return {
    data,
    isLoading,
  }
}

export default useGetAllByArea