import { defineStore } from 'pinia'

// Using Options API style as requested
export const useBookStore = defineStore('books', {
  state: () => ({
    allBooks: [],
    readingList: [],
    searchQuery: '',
    statusFilter: 'all'
  }),
  
  getters: {
    filteredBooks() {
      if (!this.searchQuery) return this.allBooks
      
      return this.allBooks.filter(book => 
        book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    },
    
    filteredReadingList() {
      let filtered = this.readingList
      
      // Apply search filter
      if (this.searchQuery) {
        filtered = filtered.filter(book => 
          book.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
      
      // Apply status filter
      if (this.statusFilter !== 'all') {
        filtered = filtered.filter(book => book.status === this.statusFilter)
      }
      
      return filtered
    },
    
    planToReadCount() {
      return this.readingList.filter(book => book.status === 'plan').length
    },
    
    readingCount() {
      return this.readingList.filter(book => book.status === 'reading').length
    },
    
    readCount() {
      return this.readingList.filter(book => book.status === 'read').length
    },
    
    totalBooks() {
      return this.readingList.length
    }
  },
  
  actions: {
    async fetchBooks() {
      try {
        // For simplicity, we'll use a mock list instead of an actual API call
        this.allBooks = [
          { id: 1, title: 'Война и мир', author: 'Лев Толстой', year: 1869, cover: 'https://placehold.co/100x150' },
          { id: 2, title: 'Преступление и наказание', author: 'Фёдор Достоевский', year: 1866, cover: 'https://placehold.co/100x150' },
          { id: 3, title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967, cover: 'https://placehold.co/100x150' },
          { id: 4, title: 'Гарри Поттер и философский камень', author: 'Дж. К. Роулинг', year: 1997, cover: 'https://placehold.co/100x150' },
          { id: 5, title: '1984', author: 'Джордж Оруэлл', year: 1949, cover: 'https://placehold.co/100x150' },
          { id: 6, title: 'Три товарища', author: 'Эрих Мария Ремарк', year: 1936, cover: 'https://placehold.co/100x150' },
          { id: 7, title: 'Маленький принц', author: 'Антуан де Сент-Экзюпери', year: 1943, cover: 'https://placehold.co/100x150' },
          { id: 8, title: 'Властелин колец', author: 'Дж. Р. Р. Толкин', year: 1955, cover: 'https://placehold.co/100x150' }
        ]
      } catch (error) {
        console.error('Error fetching books:', error)
      }
    },
    
    addToReadingList(book) {
      const existingBook = this.readingList.find(item => item.id === book.id)
      
      if (!existingBook) {
        this.readingList.push({
          ...book,
          status: 'plan' // Default status: Plan to read
        })
      }
    },
    
    removeFromReadingList(bookId) {
      this.readingList = this.readingList.filter(book => book.id !== bookId)
    },
    
    updateBookStatus(bookId, status) {
      const book = this.readingList.find(book => book.id === bookId)
      if (book) {
        book.status = status
      }
    },
    
    setSearchQuery(query) {
      this.searchQuery = query
    },
    
    setStatusFilter(status) {
      this.statusFilter = status
    }
  }
}) 