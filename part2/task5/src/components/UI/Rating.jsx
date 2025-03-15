import React from 'react';
import styled from 'styled-components';
import { Rating as MuiRating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledRating = styled(MuiRating)`
  .MuiRating-iconFilled {
    color: #ff4500;
  }
  
  .MuiRating-iconEmpty {
    color: #ff4500;
    opacity: 0.3;
  }
`;

const RatingValue = styled.span`
  font-weight: 500;
  color: #333;
`;

const Rating = ({ value, onChange, readOnly = true, size }) => {
  return (
    <RatingContainer>
      <StyledRating
        name="restaurant-rating"
        value={value}
        precision={0.1}
        onChange={onChange}
        readOnly={readOnly}
        size={size || "small"}
        icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarIcon fontSize="inherit" />}
      />
      {value > 0 && <RatingValue>{value.toFixed(1)}</RatingValue>}
    </RatingContainer>
  );
};

export default Rating; 