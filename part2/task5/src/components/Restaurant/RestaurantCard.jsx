import React from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';
import Rating from '../UI/Rating';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  cursor: pointer;
`;

const RestaurantImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const RestaurantName = styled(Typography)`
  font-weight: 500 !important;
  font-size: 1rem !important;
  color: #000;
  margin-bottom: 4px !important;
`;

const RestaurantInfo = styled(Typography)`
  font-size: 0.9rem !important;
  color: #777;
  margin-bottom: 4px !important;
`;

const RatingContainer = styled.div`
  margin-top: 2px;
`;

const RestaurantCard = ({ restaurant }) => {
  const { name, rating, image, cuisineType } = restaurant;

  // Format rating to one decimal place (if needed)
  const formattedRating = Number.isInteger(rating) ? rating : rating.toFixed(1);

  return (
    <CardContainer>
      <RestaurantImage
        src={image || 'https://via.placeholder.com/300x200?text=Restaurant'}
        alt={name}
      />
      
      <RestaurantName>{name}</RestaurantName>
      <RestaurantInfo>
        {cuisineType}, {formattedRating} stars
      </RestaurantInfo>
      
      <RatingContainer>
        <Rating 
          value={rating} 
          readOnly
        />
      </RatingContainer>
    </CardContainer>
  );
};

export default RestaurantCard; 