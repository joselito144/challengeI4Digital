import { Button, Card, Image, Row } from 'antd'
import React, { useState } from 'react'

const getInitialRate = (initialRating, idMeal) => {
  const element = initialRating.filter(ele => ele.idMeal === idMeal)
  if(element.length > 0) {
    return element[0].rate
  }

  return 0
}




const MealCard = ({ title, img, index, idMeal }) => {

  const { Meta } = Card
  const intialFavorities = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  const initialRating = localStorage.getItem('rating') ? JSON.parse(localStorage.getItem('rating')) : []
  const [isFavorite, setIsFavorite] = useState(intialFavorities.includes(idMeal))
  const [startsRate, setStartsRate] = useState(getInitialRate(initialRating, idMeal))


  const setFavorite = () => {
    const favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    if (!isFavorite) {
      favorites.push(idMeal)
      localStorage.setItem('favorites', JSON.stringify(favorites))
    } else {
      const filteredArray = favorites.filter((number) => number !== idMeal)
      localStorage.setItem('favorites', JSON.stringify(filteredArray))
    }
    setIsFavorite(!isFavorite)
  }

  const Starts = () => {

    const fullStars = Math.floor(startsRate);
    const emptyStars = 5 - fullStars;

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(<Button size="smal" type="text" key={i} onClick={() => handleStarClick(i + 1)}>⭐</Button>);
    }

    for (let i = 0; i < emptyStars; i++) {
      starElements.push(<Button size="smal" type="text" key={i + fullStars} onClick={() => handleStarClick(fullStars + i + 1)}>✩</Button>);
    }

    return <p>{starElements}</p>;
  }

  const handleStarClick = (rating) => {
    setStartsRate(rating)
    let rates = localStorage.getItem('rating') ? JSON.parse(localStorage.getItem('rating')) : []
    rates = rates.filter(ele => ele.idMeal !== idMeal)
    rates.push(
      {
        idMeal,
        rate: rating
      }
    )
    localStorage.setItem('rating', JSON.stringify(rates))
  }



  return (
    <Card
      hoverable
      cover={<Image alt="example" src={img} />}
      key={index}
    >
      <Meta title={title} />
      <Starts
        rating={0}
      />
      <Row justify="end">
        <Button size="large" type="text" onClick={setFavorite}>{isFavorite ? '❤️' : '♡'}</Button>
      </Row>

    </Card>
  )
}

export default MealCard