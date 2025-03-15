import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography, CircularProgress, Box, AppBar, Toolbar } from '@mui/material';
import RestaurantCard from '../components/Restaurant/RestaurantCard';
import SearchBar from '../components/UI/SearchBar';
import Logo from '../components/UI/Logo';
import Avatar from '../components/UI/Avatar';
import { fetchRestaurants } from '../api/api';

const PageContainer = styled(Container)`
  padding: 24px;
  padding-top: 80px;
  padding-bottom: 60px;
  max-width: 1200px;
`;

const StyledAppBar = styled(AppBar)`
  background-color: white !important;
  color: #333 !important;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05) !important;
`;

const AppBarContent = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 8px 24px !important;
`;

const SearchContainer = styled.div`
  margin: 32px 0;
`;

const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const RestaurantContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

const NoResultsMessage = styled(Typography)`
  text-align: center;
  margin-top: 48px;
  color: #666;
`;

const Footer = styled.footer`
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Typography)`
  color: #888;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled(Typography)`
  color: #888;
  font-size: 14px;
`;

const MainPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch restaurants on component mount
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        setIsLoading(true);
        const data = await fetchRestaurants();
        setRestaurants(data);
        setFilteredRestaurants(data);
      } catch (err) {
        setError('Failed to load restaurants. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getRestaurants();
  }, []);

  // Filter restaurants when search term changes
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurant.cuisineType.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [searchTerm, restaurants]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <StyledAppBar position="fixed">
        <AppBarContent>
          <Logo />
          <Avatar src="https://i.pravatar.cc/300" alt="User" />
        </AppBarContent>
      </StyledAppBar>
      
      <PageContainer>
        <SearchContainer>
          <SearchBar 
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for restaurants"
          />
        </SearchContainer>

        {isLoading ? (
          <LoadingContainer>
            <CircularProgress />
          </LoadingContainer>
        ) : error ? (
          <NoResultsMessage variant="h6">{error}</NoResultsMessage>
        ) : filteredRestaurants.length === 0 ? (
          <NoResultsMessage variant="h6">
            No restaurants found matching your search.
          </NoResultsMessage>
        ) : (
          <RestaurantContainer>
            {filteredRestaurants.map(restaurant => (
              <RestaurantCard 
                key={restaurant.id}
                restaurant={restaurant}
              />
            ))}
          </RestaurantContainer>
        )}
        
        <Footer>
          <FooterLinks>
            <FooterLink>Privacy Policy</FooterLink>
            <FooterLink>Terms of Service</FooterLink>
          </FooterLinks>
          <Copyright>© 2022 Eats</Copyright>
        </Footer>
      </PageContainer>
    </>
  );
};

export default MainPage; 