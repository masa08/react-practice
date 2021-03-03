import React from 'react';
import styled from 'styled-components';
import Header from '../shared/Header';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Head>hello</Head>
    </>
  )
}

const Head = styled.h1`
  color: red;
`

export default Home;
