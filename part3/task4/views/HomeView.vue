<template>
  <div class="home">
    <h2>Список книг</h2>
    
    <div class="search-container">
      <input 
        type="text" 
        v-model="searchQuery" 
        placeholder="Поиск книг..." 
        @input="updateSearch"
      />
    </div>
    
    <div class="books-grid">
      <div v-for="book in bookStore.filteredBooks" :key="book.id" class="book-card">
        <img :src="book.cover" alt="Book cover" class="book-cover" />
        <div class="book-info">
          <h3>{{ book.title }}</h3>
          <p>{{ book.author }}, {{ book.year }}</p>
          <button 
            v-if="userStore.isAuthenticated" 
            @click="addToReadingList(book)"
            class="add-button"
          >
            Добавить в список
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useBookStore } from '../stores/books'
import { useUserStore } from '../stores/user'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const bookStore = useBookStore()
    const userStore = useUserStore()
    const searchQuery = ref('')

    onMounted(() => {
      bookStore.fetchBooks()
    })

    const updateSearch = () => {
      bookStore.setSearchQuery(searchQuery.value)
    }

    const addToReadingList = (book) => {
      bookStore.addToReadingList(book)
      alert(`Книга "${book.title}" добавлена в ваш список для чтения!`)
    }

    return {
      bookStore,
      userStore,
      searchQuery,
      updateSearch,
      addToReadingList
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.search-container {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
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
}

.book-info h3 {
  margin-bottom: 5px;
}

.book-info p {
  color: #666;
  margin-bottom: 10px;
}

.add-button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-button:hover {
  background-color: #3aa876;
}
</style> 