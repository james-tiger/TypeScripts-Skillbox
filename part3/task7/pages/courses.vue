<template>
  <div>
    <h1>Курсы</h1>
    
    <div v-if="coursesStore.loading" class="loading">
      Загрузка курсов...
    </div>
    
    <div v-else class="courses-grid">
      <div v-for="course in courses" :key="course.id" class="course-card">
        <h2>{{ course.title }}</h2>
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
const courses = computed(() => coursesStore.courses);
const categories = ref([]);

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
  font-size: 28px;
  margin-bottom: 30px;
}

.loading {
  text-align: center;
  font-size: 18px;
  margin: 40px 0;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

.course-card h2 {
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
</style> 