// Mock restaurant data
const restaurants = [
  {
    id: 1,
    name: "Mama's Kitchen",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    cuisineType: "American"
  },
  {
    id: 2,
    name: "The Burger Joint",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    cuisineType: "American"
  },
  {
    id: 3,
    name: "Pasta Express",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    cuisineType: "Italian"
  },
  {
    id: 4,
    name: "Taco Fiesta",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    cuisineType: "Mexican"
  }
];

// Mock delay to simulate API request
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const fetchRestaurants = async () => {
  // Simulate network delay
  await delay(800);
  return [...restaurants];
};

export const updateRestaurantRating = async (restaurantId, newRating) => {
  // Simulate network delay
  await delay(500);
  
  // Find restaurant and update rating
  const restaurant = restaurants.find(r => r.id === restaurantId);
  if (restaurant) {
    restaurant.rating = newRating;
    return { success: true, restaurant };
  }
  
  return { success: false, error: "Restaurant not found" };
}; 