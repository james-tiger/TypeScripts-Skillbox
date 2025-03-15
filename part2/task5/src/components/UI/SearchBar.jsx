import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f5f0f0;
  border-radius: 8px;
  padding: 10px 16px;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  color: #888;
`;

const StyledInputBase = styled(InputBase)`
  flex: 1;
  color: #333;
  
  & input::placeholder {
    color: #aaa;
    font-size: 16px;
  }
`;

const SearchBar = ({ value, onChange, placeholder }) => {
  return (
    <SearchContainer>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={placeholder || "Search for restaurants"}
        value={value}
        onChange={onChange}
        fullWidth
      />
    </SearchContainer>
  );
};

export default SearchBar; 