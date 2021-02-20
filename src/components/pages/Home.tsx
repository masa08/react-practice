import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const Home: React.FC = () => {
  return (
    <>
      <Head>hello</Head>
      <Button color='primary'>test</Button>
    </>
  )
}

const Head = styled.h1`
  color: red;
`

export default Home;
