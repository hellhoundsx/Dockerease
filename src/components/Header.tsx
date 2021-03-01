import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 70%;
  height: fit-content;
  text-align: center;
  color: white;
  border-bottom: 1.5px solid rgba(255,255,255, .1);
  background: rgba(0,0,0, .05);
  padding: 10px;
  -webkit-app-region: drag;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 3px;
`;

const Header = () => {
  return <Wrapper>Dock  easy</Wrapper>
}

export default Header;