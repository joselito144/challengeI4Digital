import React, { useContext, useState } from 'react'
import { Form, Input, Button, Row, Col, Card } from 'antd'
import { LocalContext } from '../context/context'
import getByName from '../helpers/getByName';

const SearchForm = () => {

  const { setResults } = useContext(LocalContext)

  const [history, setHistory] = useState(localStorage.getItem('history') ? JSON.parse(localStorage.getItem('history')) : [])

  const [form] = Form.useForm()



  const onFinish = async (values) => {
    const response = await getByName(values.mealName)
    if (history.length >= 10) {
      history.shift()
    }
    if (!history.includes(values.mealName)) {
      history.push(values.mealName)
    }
    setHistory(history)
    localStorage.setItem('history', JSON.stringify(history))
    setResults(response)
  }

  const searchWord = (word) => {
    form.setFieldsValue({ mealName: word })
    form.submit()
  }

  return (
    <>
      <Card>
        <h2>Buscar plato</h2>
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
        >
          <Row justify="space-between">
            <Col xs={12} sm={12} xl={8}>
              <Form.Item
                name="mealName"
                label="Nombre del plato"
                rules={[{ required: true, message: 'Debe ingresar el nombre del plato' }]}
              >
                <Input placeholder="Nombre del plato" />
              </Form.Item>
            </Col>


          </Row>
          <Row>
            <Col xs={12} sm={12} xl={8}>
              <Form.Item label="">
                <Button type="primary" htmlType="submit">
                  Buscar
                </Button>
              </Form.Item>
            </Col>
          </Row>

        </Form>
        <div>
          <p>Últimas búsquedas:</p>
          {
            history.map(ele => {
              return (
                <Button type='link' onClick={() => searchWord(ele)}>
                  {ele}
                </Button>
              )
            })
          }
        </div>
      </Card>


    </>



  );
};

export default SearchForm;
