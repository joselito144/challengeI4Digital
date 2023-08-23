import React from 'react'
import { Layout } from 'antd'

import Home from './pages/Home'


import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import LocalProvider from './context/context'

const { Content } = Layout;

const App = () => {
  return (
    <LocalProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Content style={{ padding: '24px' }}>
            <Home />
          </Content>
          <Footer />
        </Layout>

      </Layout>
    </LocalProvider>

  );
};

export default App;

