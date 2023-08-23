import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      <p>Prueba Técnica I4Digital</p>
      <p>Develop by: Jose Suárez</p>

    </AntFooter>
  );
};

export default Footer;
