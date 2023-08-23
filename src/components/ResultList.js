import React, { useState, useContext, useEffect } from 'react'
import { Pagination, Row, Col } from 'antd';
import { LocalContext } from '../context/context'
import useGetAllByArea from '../hooks/mealData/useGetAllByArea'
import MealCard from './MealCard'

import CustomLoading from './customLoading/customLoading'




const ResultList = () => {

  const { results, setResults } = useContext(LocalContext)


  const { data, isLoading } = useGetAllByArea('Canadian')

  const [currentPage, setCurrentPage] = useState(1)

  const itemsPerPage = 5
  let totalItems

  useEffect(() => {
    setResults(data)
  }, [results, setResults, data])


  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (!isLoading) {
    totalItems = data.meals.length
  }




  return (
    <>
      {
        isLoading && results ?

          <CustomLoading />
          :
          <>
            {
              results?.length === 0 ?
                <p>No hay resultados para la búsqueda</p>
                :
                <>
                  <Row gutter={24}>
                    {results?.meals.slice(startIndex, endIndex).map((meal, idx) => (
                      <Col xs={24} sm={24} md={12} lg={8} xl={8} key={idx}>
                        <MealCard
                          title={meal.strMeal}
                          img={meal.strMealThumb}
                          index={idx}
                          idMeal={+meal.idMeal}
                        />
                      </Col>

                    ))}

                  </Row>
                  <Pagination
                    current={currentPage}
                    pageSize={itemsPerPage}
                    total={totalItems}
                    onChange={handleChangePage}
                  />
                </>
            }

          </>

      }
    </>

  )
}

export default ResultList