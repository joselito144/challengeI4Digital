import React, { useContext } from 'react'
import { LocalContext } from '../context/context'
import { Layout, Menu } from 'antd'

import CustomLoading from './customLoading/customLoading'

import useGetAllCategories from '../hooks/mealData/useGetAllCategories'

const { Sider } = Layout;

const Sidebar = () => {

  const { data, isLoading } = useGetAllCategories()

  const { searchOptions, setSearchOptions } = useContext(LocalContext)

  const menuOptions = []

  const onClick = (value) => {
    setSearchOptions(
      {
        ...searchOptions,
        category: value
      }
    )
  }


  if (!isLoading) {
    data.meals.forEach((meal, idx) => {
      menuOptions.push(
        <Menu.Item key={idx} onClick={() => onClick(meal.strCategory)} >
          {meal.strCategory}
        </Menu.Item>
      )

    })
  }

  return (
    <Sider width={200} theme="dark">
      {
        isLoading ?
          <CustomLoading />
          :
          <Menu
            mode="inline"
            theme="dark"
          >
            <Menu.SubMenu title={'Regiones'} key={1}>
              {menuOptions}
            </Menu.SubMenu>

          </Menu>
      }

    </Sider>
  );
};

export default Sidebar;
