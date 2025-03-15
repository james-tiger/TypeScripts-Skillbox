import React from 'react';
import styled from 'styled-components';
import { Avatar as MuiAvatar } from '@mui/material';

const StyledAvatar = styled(MuiAvatar)`
  width: ${props => props.size || '40px'};
  height: ${props => props.size || '40px'};
  cursor: pointer;
  border: 2px solid #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const Avatar = ({ src, alt, size }) => {
  // If no image provided, use first letter of name as avatar
  const getInitials = name => {
    if (!name) return 'U';
    return name.charAt(0).toUpperCase();
  };

  return (
    <StyledAvatar 
      src={src} 
      alt={alt || 'User'} 
      size={size}
    >
      {!src && getInitials(alt)}
    </StyledAvatar>
  );
};

export default Avatar; 