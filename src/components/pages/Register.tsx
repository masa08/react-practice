import { TextField } from '@material-ui/core';
import React from 'react';
import Header from '../shared/Header';
import styled from 'styled-components';

const Register: React.FC = () => {
  return (
    <>
      <Header />
      <h1>register</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="PASSWORD" variant="outlined" type="password" />
    </>
  )
}

const Head = styled.h1`
  color: red;
`

export default Register;
