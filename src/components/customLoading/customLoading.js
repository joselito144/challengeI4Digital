import { LoadingOutlined } from '@ant-design/icons'
import React from 'react'
import ContainerLoading from './customLoading.styles'

const CustomLoading = () => {
  return (
    <ContainerLoading>
      <LoadingOutlined spin />
    </ContainerLoading>
  )
}

export default CustomLoading
