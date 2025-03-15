<template>
  <div class="reading-list">
    <h2>Мой список книг</h2>
    
    <div class="stats">
      <div class="stat-item">
        <strong>Всего книг:</strong> {{ bookStore.totalBooks }}
      </div>
      <div class="stat-item">
        <strong>Планирую прочесть:</strong> {{ bookStore.planToReadCount }}
      </div>
      <div class="stat-item">
        <strong>Читаю:</strong> {{ bookStore.readingCount }}
      </div>
      <div class="stat-item">
        <strong>Прочитано:</strong> {{ bookStore.readCount }}
      </div>
    </div>
    
    <div class="filters">
      <div class="search-container">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Поиск книг..." 
          @input="updateSearch"
        />
      </div>
      
      <div class="status-filter">
        <label>Фильтр по статусу:</label>
        <select v-model="statusFilter" @change="updateStatusFilter">
          <option value="all">Все книги</option>
          <option value="plan">Планирую прочесть</option>
          <option value="reading">Читаю</option>
          <option value="read">Прочитано</option>
        </select>
      </div>
    </div>
    
    <div v-if="bookStore.filteredReadingList.length === 0" class="empty-list">
      <p>Ваш список книг пуст. Добавьте книги с главной страницы.</p>
    </div>
    
    <div v-else class="books-grid">
      <div v-for="book in bookStore.filteredReadingList" :key="book.id" class="book-card">
        <img :src="book.cover" alt="Book cover" class="book-cover" />
        <div class="book-info">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}, {{ book.year }}</p>
          
          <div class="status-selector">
            <label>Статус:</label>
            <select 
              v-model="book.status" 
              @change="updateStatus(book.id, book.status)"
            >
              <option value="plan">Планирую прочесть</option>
              <option value="reading">Читаю</option>
              <option value="read">Прочитано</option>
            </select>
          </div>
          
          <button 
            @click="removeFromList(book.id, book.title)"
            class="remove-button"
          >
            Удалить из списка
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookStore } from '../stores/books'
import { ref } from 'vue'

export default {
  setup() {
    const bookStore = useBookStore()
    const searchQuery = ref('')
    const statusFilter = ref('all')

    const updateSearch = () => {
      bookStore.setSearchQuery(searchQuery.value)
    }

    const updateStatusFilter = () => {
      bookStore.setStatusFilter(statusFilter.value)
    }

    const updateStatus = (bookId, status) => {
      bookStore.updateBookStatus(bookId, status)
    }

    const removeFromList = (bookId, bookTitle) => {
      if (confirm(`Вы уверены, что хотите удалить "${bookTitle}" из вашего списка?`)) {
        bookStore.removeFromReadingList(bookId)
      }
    }

    return {
      bookStore,
      searchQuery,
      statusFilter,
      updateSearch,
      updateStatusFilter,
      updateStatus,
      removeFromList
    }
  }
}
</script>

<style scoped>
.reading-list {
  padding: 20px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.stat-item {
  background-color: white;
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.search-container {
  flex: 1;
  min-width: 200px;
}

.status-filter {
  display: flex;
  align-items: center;
  gap: 10px;
}

input, select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input {
  width: 100%;
}

.empty-list {
  text-align: center;
  padding: 40px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.book-card {
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.book-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.book-cover {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
}

.book-info {
  text-align: center;
  width: 100%;
}

.book-info h3 {
  margin-bottom: 5px;
}

.book-info p {
  color: #666;
  margin-bottom: 10px;
}

.status-selector {
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.remove-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.remove-button:hover {
  background-color: #c0392b;
}
</style> 