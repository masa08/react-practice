import React from 'react';
import styled from 'styled-components';
import Header from '../shared/Header';
import { Button } from '@material-ui/core';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Head>hello</Head>
      <Button color='primary'>world</Button>
    </>
  )
}

const Head = styled.h1`
  color: red;
`

export default Home;
