import { defineStore } from 'pinia';
import { Course } from '~/types';

export const useAdminStore = defineStore('admin', {
  state: () => ({
    loading: false,
    error: null,
  }),
  
  actions: {
    // Method to add a new course
    addCourse: async (course: Course) => $fetch(
      `/api/courses/`,
      {method: 'post', body: course}
    ),
    
    // Additional admin functions can be added here
  }
}); 