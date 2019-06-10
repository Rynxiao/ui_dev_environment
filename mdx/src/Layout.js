import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './CodeBlock';

const Wrapper = props => <main style={{ padding: '20px', backgroundColor: '#f9f9f9' }} {...props} />;
const H1 = props => <main style={{
  fontSize: '24px',
  fontFamily: 'monospace',
}} {...props} />;

// const Code = props => <code style={{
//   padding: '20px',
//   fontSize: '14px',
//   backgroundColor: '#5f595a',
//   color: '#fff',
//   borderRadius: '5px',
//   margin: '10px',
//   display: 'inline-block',
//   width: '70%',
//   maxHeight: '125px',
//   boxSizing: 'border-box',
//   overflow: 'auto',
// }} {...props} />;

const components = {
  wrapper: Wrapper,
  code: CodeBlock,
  h1: H1,
};

export default ({ children }) =>
  <MDXProvider components={components}>
    {children}
  </MDXProvider>
