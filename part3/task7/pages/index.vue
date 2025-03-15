<template>
  <div>
    <h1>Добро пожаловать на сайт курсов</h1>
    
    <div class="welcome-section">
      <p>
        Наша платформа предлагает разнообразные курсы для всех уровней подготовки.
        Изучайте новые навыки, развивайтесь профессионально и достигайте своих целей вместе с нами!
      </p>
      
      <div class="action-buttons">
        <NuxtLink to="/courses" class="action-button primary">Просмотреть курсы</NuxtLink>
        <NuxtLink to="/contacts" class="action-button secondary">Свяжитесь с нами</NuxtLink>
      </div>
    </div>
    
    <h2>Популярные курсы</h2>
    
    <div v-if="coursesStore.loading" class="loading">
      Загрузка курсов...
    </div>
    
    <div v-else class="featured-courses">
      <div v-for="course in featuredCourses" :key="course.id" class="course-card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <div class="category-tag">
          <span>{{ getCategoryName(course.categoryId) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useCoursesStore } from '~/store/courses';

const coursesStore = useCoursesStore();
const categories = ref([]);

// Only display the first 3 courses as featured
const featuredCourses = computed(() => {
  return coursesStore.courses.slice(0, 3);
});

onMounted(async () => {
  await coursesStore.fetchCourses();
  categories.value = await coursesStore.fetchCategories();
});

function getCategoryName(categoryId) {
  const category = categories.value.find(c => c.id === categoryId);
  return category ? category.name : 'Неизвестно';
}
</script>

<style scoped>
h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin: 40px 0 20px;
}

.welcome-section {
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.welcome-section p {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.action-buttons {
  display: flex;
  gap: 15px;
}

.action-button {
  display: inline-block;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s;
}

.action-button.primary {
  background-color: #6366f1;
  color: white;
}

.action-button.primary:hover {
  background-color: #4f46e5;
}

.action-button.secondary {
  background-color: white;
  color: #6366f1;
  border: 2px solid #6366f1;
}

.action-button.secondary:hover {
  background-color: #f0f0ff;
}

.loading {
  text-align: center;
  font-size: 18px;
  margin: 40px 0;
}

.featured-courses {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.course-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 20px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.course-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.course-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.course-card p {
  color: #666;
  margin-bottom: 15px;
}

.category-tag {
  display: inline-block;
  padding: 5px 10px;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .featured-courses {
    grid-template-columns: 1fr;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style> 