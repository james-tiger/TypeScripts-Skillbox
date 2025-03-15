<template>
  <div>
    <nav class="navbar">
      <NuxtLink to="/" class="nav-link">Главная</NuxtLink>
      <NuxtLink to="/contacts" class="nav-link">Контакты</NuxtLink>
      <NuxtLink to="/courses" class="nav-link">Курсы</NuxtLink>
      <NuxtLink to="/admin" class="nav-link nav-active">Управление</NuxtLink>
    </nav>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  padding: 15px 100px;
  background-color: #f5f5f5;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.nav-link {
  color: #6366f1;
  margin-right: 20px;
  text-decoration: none;
  font-size: 16px;
}

.nav-active {
  background-color: #e5e7eb;
  padding: 8px 12px;
  border-radius: 4px;
}

.content {
  padding: 0 100px;
}
</style> 