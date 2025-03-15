<template>
  <div class="card-list">
    <div 
      v-for="card in cards" 
      :key="card.id" 
      class="card"
      @click="onCardClick(card)"
    >
      <img :src="card.imageUrl" alt="Course image" class="card-image">
      <div class="card-content">
        <h3 class="card-title">{{ card.title }}</h3>
        <p class="card-description">{{ card.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    onCardClick(card) {
      this.$emit('card-click', card);
    }
  }
}
</script>

<style scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-title {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
}

.card-description {
  color: #666;
  margin: 0;
}
</style> 