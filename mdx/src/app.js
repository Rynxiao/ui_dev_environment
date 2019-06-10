import React from 'react';
import ReactDOM from 'react-dom';
import MDXDocument from './main.mdx';
import Layout from './Layout';

ReactDOM.render(
  <Layout>
    <MDXDocument />
  </Layout>,
  document.querySelector('#container'),
);
