<template>
  <div class="admin-container">
    <div class="course-list-section">
      <h1>Список курсов</h1>
      <div class="courses-list">
        <div v-for="course in courses" :key="course.id" class="course-item">
          {{ course.title }}
        </div>
      </div>
    </div>
    
    <div class="course-form-section">
      <h1>Форма</h1>
      <div class="form-group">
        <label>Название</label>
        <input 
          type="text" 
          v-model="newCourse.title" 
          class="form-control"
        />
      </div>
      
      <div class="form-group">
        <label>Категория</label>
        <div class="radio-group">
          <div class="radio-option">
            <input 
              type="radio" 
              id="category-simple" 
              name="category" 
              value="1" 
              v-model="newCourse.categoryId"
            />
            <label for="category-simple">Простые</label>
          </div>
          
          <div class="radio-option">
            <input 
              type="radio" 
              id="category-medium" 
              name="category" 
              value="2" 
              v-model="newCourse.categoryId"
            />
            <label for="category-medium">Средние</label>
          </div>
          
          <div class="radio-option">
            <input 
              type="radio" 
              id="category-advanced" 
              name="category" 
              value="3" 
              v-model="newCourse.categoryId"
            />
            <label for="category-advanced">Продвинутые</label>
          </div>
        </div>
      </div>
      
      <button @click="save" class="submit-button">Готово</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCoursesStore } from '~/store/courses';
import { useAdminStore } from '~/store/admin';

const coursesStore = useCoursesStore();
const adminStore = useAdminStore();

const courses = ref([]);
const categories = ref([]);
const newCourse = ref({
  title: '',
  description: ' ', // Adding default value as description is required
  categoryId: null
});

onMounted(async () => {
  await loadData();
});

async function loadData() {
  // Fetch courses and categories from the backend
  courses.value = await coursesStore.fetchCourses();
  categories.value = await coursesStore.fetchCategories();
}

async function save() {
  if (!newCourse.value.title || !newCourse.value.categoryId) {
    alert('Заполните все поля формы');
    return;
  }

  try {
    // Add the new course using the admin store
    await adminStore.addCourse(newCourse.value);
    
    // Clear the form
    newCourse.value = {
      title: '',
      description: ' ',
      categoryId: null
    };
    
    // Reload courses to display the new one
    await loadData();
  } catch (error) {
    console.error('Error adding course:', error);
  }
}
</script>

<style scoped>
.admin-container {
  display: flex;
  gap: 30px;
}

.course-list-section, .course-form-section {
  flex: 1;
}

h1 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.courses-list {
  display: flex;
  flex-direction: column;
}

.course-item {
  margin-bottom: 10px;
  font-size: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.radio-group {
  display: flex;
  gap: 20px;
}

.radio-option {
  display: flex;
  align-items: center;
}

.radio-option input {
  margin-right: 5px;
}

.submit-button {
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style> 