import React from 'react';
import styled from 'styled-components';


const MenuWrapper = styled.div`
  width: 30%;
  border-right: 1.5px solid rgba(255,255,255, .1);
`;

const MenuHeader = styled.div`
  height: 15%;
  background: rgba(0,0,0, .025);
  text-align: center;
  color: white;
`;

const MenuBody = styled.div`
  display: flex;
  height: 85%;
  text-align: center;
  color: white;
  background: rgba(0,0,0, .05);
  flex-direction: column;
`;

const MenuItem = styled.div`
  width: 100%;
  padding: 15px;
`;

const MenuFooter = styled.div`
  margin-top: auto;
`;

const SideBar = () => {
  return <MenuWrapper>
    <MenuHeader>
      Configs
    </MenuHeader>
    <MenuBody>

      <MenuItem> Row 1 </MenuItem>
      <MenuItem> Row 2 </MenuItem>


      <MenuFooter>
        <MenuItem> Settings </MenuItem>
      </MenuFooter>
    </MenuBody>
  </MenuWrapper>
}

export default SideBar;