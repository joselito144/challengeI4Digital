/* eslint-disable consistent-return */
import React, { createContext, useState } from 'react'


export const LocalContext = createContext()

const { Provider } = LocalContext



const LocalProvider = (props) => {

  const [ searchOptions, setSearchOptions ] = useState({area: 'Canadian'})

  const [results, setResults] = useState()


  const { children } = props

  const availableValues = {
    searchOptions, setSearchOptions,
    results, setResults
  }
  return <Provider value={availableValues}>{children}</Provider>
}

export default LocalProvider