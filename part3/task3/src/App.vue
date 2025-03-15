<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">
          <RouterLink to="/">Skillbox Vue.js</RouterLink>
        </div>
        <nav class="header__nav">
          <ul class="header__nav-list">
            <li class="header__nav-item">
              <RouterLink to="/" class="header__nav-link">Главная</RouterLink>
            </li>
            <li class="header__nav-item">
              <RouterLink to="/product/1" class="header__nav-link">Товар</RouterLink>
            </li>
            <li class="header__nav-item">
              <RouterLink to="/calculator" class="header__nav-link">Калькулятор</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
/* Base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  color: #222;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.content {
  padding: 30px 0;
}

.content__top {
  margin-bottom: 20px;
}

.content__title {
  font-size: 28px;
  font-weight: bold;
}

/* Header styles */
.header {
  background-color: #4c67e4;
  padding: 15px 0;
  color: white;
}

.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  font-size: 24px;
  font-weight: bold;
}

.header__logo a {
  color: white;
  text-decoration: none;
}

.header__nav-list {
  display: flex;
  gap: 20px;
  list-style: none;
}

.header__nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.header__nav-link:hover {
  text-decoration: underline;
}
</style> 