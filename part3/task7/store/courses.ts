import { defineStore } from 'pinia';
import { Course, Category } from '~/types';

export const useCoursesStore = defineStore('courses', {
  state: () => ({
    courses: [] as Course[],
    categories: [] as Category[],
    loading: false,
    error: null,
  }),
  
  actions: {
    // Fetch all courses from the backend
    async fetchCourses() {
      this.loading = true;
      try {
        const courses = await $fetch('/api/courses');
        this.courses = courses;
        return courses;
      } catch (error) {
        this.error = error;
        console.error('Error fetching courses:', error);
        return [];
      } finally {
        this.loading = false;
      }
    },
    
    // Fetch all categories from the backend
    async fetchCategories() {
      this.loading = true;
      try {
        const categories = await $fetch('/api/categories');
        this.categories = categories;
        return categories;
      } catch (error) {
        this.error = error;
        console.error('Error fetching categories:', error);
        return [];
      } finally {
        this.loading = false;
      }
    }
  }
}); 