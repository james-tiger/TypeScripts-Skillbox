<template>
  <div class="app">
    <header class="header">
      <h1>Книжная полка</h1>
      <nav>
        <router-link to="/">Главная</router-link>
        <router-link v-if="userStore.isAuthenticated" to="/list">Мои книги</router-link>
        <button @click="handleAuth">
          {{ userStore.isAuthenticated ? 'Выйти' : 'Войти' }}
        </button>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { useUserStore } from './stores/user'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const userStore = useUserStore()
    const router = useRouter()

    const handleAuth = () => {
      if (userStore.isAuthenticated) {
        userStore.logout()
        router.push('/')
      } else {
        userStore.login()
      }
    }

    return {
      userStore,
      handleAuth
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

nav {
  display: flex;
  gap: 20px;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

nav a.router-link-active {
  color: #42b983;
}

button {
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3aa876;
}
</style> 