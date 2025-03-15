import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    username: ''
  }),
  actions: {
    login() {
      this.isAuthenticated = true
      this.username = 'Reader' // Simplified login for demo
    },
    logout() {
      this.isAuthenticated = false
      this.username = ''
    }
  }
}) 