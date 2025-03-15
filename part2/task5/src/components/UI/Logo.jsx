import React from 'react';
import styled from 'styled-components';
import RestaurantIcon from '@mui/icons-material/Restaurant';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const LogoIcon = styled(RestaurantIcon)`
  font-size: 24px;
  color: #000;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #000;
  margin: 0;
`;

const Logo = () => {
  return (
    <LogoContainer>
      <LogoIcon />
      <LogoText>Eats</LogoText>
    </LogoContainer>
  );
};

export default Logo; 