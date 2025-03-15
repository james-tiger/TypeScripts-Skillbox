<template>
  <main class="content container">
    <div class="content__top">
      <h1 class="content__title">Главная страница</h1>
    </div>
    <div class="home-content">
      <p>Добро пожаловать в практическую работу по Vue.js!</p>
      <p>В этом приложении вы можете:</p>
      <ul>
        <li>Посмотреть карточку товара</li>
        <li>Воспользоваться калькулятором дохода от вклада</li>
      </ul>
      <div class="home-navigation">
        <RouterLink to="/product/1" class="home-btn">Перейти к товару</RouterLink>
        <RouterLink to="/calculator" class="home-btn">Перейти к калькулятору</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>
.home-content {
  margin-top: 20px;
  max-width: 800px;
}

.home-content p {
  margin-bottom: 15px;
}

.home-content ul {
  margin-bottom: 20px;
  margin-left: 20px;
}

.home-navigation {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}

.home-btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #4c67e4;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.home-btn:hover {
  background-color: #3a51c6;
}
</style> 