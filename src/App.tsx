import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import Header from './components/Header';
import SideBar from './components/SideBar';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 11px -4px rgba(0,0,0,1);
`;

const App = () => {
  return (
    <Wrapper>
      <SideBar />
      <Header />
    </Wrapper>
  );
}

export default hot(module)(App);