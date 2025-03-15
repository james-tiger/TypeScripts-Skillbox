<template>
  <div class="card-list">
    <h1>Список курсов</h1>
    <div class="cards">
      <div 
        v-for="course in courses" 
        :key="course.id" 
        class="card"
      >
        <h2 
          :class="{ 'inactive': !course.isActive }"
        >
          {{ course.isActive ? course.title : 'Кажется, курс уже не существует...' }}
        </h2>
        <div v-if="course.isActive" class="card-content">
          <p class="description">Описание: {{ course.description }}</p>
          <p class="duration">{{ course.duration }} месяцев</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  data() {
    return {
      courses: [
        {
          id: 1,
          title: 'Python-разработчик',
          description: 'На Python пишут сайты, приложения, игры и чат-боты. Netflix, Spotify, Google, Dropbox и Youtube написаны на Python.',
          duration: '10',
          isActive: true
        },
        {
          id: 2,
          title: 'Графический дизайнер',
          description: 'Научим делать бренды узнаваемыми через создание логотипов, графики для рекламы, упаковки и не только.',
          duration: '6',
          isActive: true
        },
        {
          id: 3,
          title: 'Веб-разработчик',
          description: 'Веб-разработчик создаёт сайты, сервисы и приложения, которыми мы ежедневно пользуемся.',
          duration: '7',
          isActive: true
        },
        {
          id: 4,
          title: 'Инженер по тестированию',
          description: 'Вы научитесь находить ошибки в работе сайтов и приложений с помощью Java, JavaScript или Python.',
          duration: '7',
          isActive: true
        },
        {
          id: 5,
          title: 'Курс 5',
          description: 'Описание курса 5',
          duration: '3',
          isActive: false
        },
        {
          id: 6,
          title: 'Курс 6',
          description: 'Описание курса 6',
          duration: '2',
          isActive: false
        },
        {
          id: 7,
          title: 'Курс 7',
          description: 'Описание курса 7',
          duration: '5',
          isActive: false
        }
      ]
    }
  }
}
</script>

<style scoped>
.card-list {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: left;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.card {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
}

h2 {
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: bold;
}

.inactive {
  color: #ff9999;
}

.description {
  color: #666;
  margin-bottom: 12px;
  font-size: 14px;
}

.duration {
  font-weight: normal;
  color: #666;
  font-size: 14px;
}
</style> 