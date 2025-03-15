<template>
  <div class="app">
    <h1>Список курсов</h1>

    <div v-if="isLoading" class="loading">
      Loading...
    </div>
    <CardList 
      v-else
      :cards="cards" 
      @card-click="openCardModal" 
    />

    <AppModal v-model="cardModalIsOpen">
      <CardFormModal 
        :card="cardForEdit" 
        @update-card="updateCard"
        @save-card="saveCard"
        @cancel="cardModalIsOpen = false"
      />
    </AppModal>
  </div>
</template>

<script>
import CardList from './components/CardList.vue';
import CardFormModal from './components/CardFormModal.vue';
import AppModal from './components/AppModal.vue';

export default {
  name: 'App',
  components: {
    CardList,
    CardFormModal,
    AppModal
  },
  data() {
    return {
      cards: [
        { 
          id: 1, 
          title: 'Профессия Python-разработчик', 
          description: 'На Python пишут сайты, приложения, игры и чат-боты. Netflix, Spotify, Google, Dropbox и Youtube написаны на Python.' 
        },
        { 
          id: 2, 
          title: 'Профессия Графический дизайнер', 
          description: 'Научим делать бренды узнаваемыми через создание логотипов, графики для рекламы, упаковки и не только.' 
        },
        { 
          id: 3, 
          title: 'Профессия Инженер по тестированию', 
          description: 'Вы научитесь находить ошибки в работе приложений с помощью Java, JavaScript и Python. С первого занятия погрузитесь в практику и начнете зарабатывать уже через 4 месяца.' 
        },
        { 
          id: 4, 
          title: 'Профессия Веб-разработчик', 
          description: 'Веб-разработчик создает сайты, сервисы и приложения, которыми мы пользуемся. Он разрабатывает интернет-магазины, поисковики, карты и другие веб-проекты.' 
        },
      ],
      cardModalIsOpen: false,
      cardForEdit: null,
      isLoading: false,
    }
  },
  methods: {
    openCardModal(card) {
      this.cardForEdit = { ...card }; // Create a clone to avoid direct mutation
      this.cardModalIsOpen = true;
    },
    updateCard(updatedCard) {
      this.cardForEdit = { ...updatedCard };
    },
    saveCard() {
      this.isLoading = true;
      this.cardModalIsOpen = false;
      
      // Simulate API call with 2 second delay
      setTimeout(() => {
        // Find and update the card in the array
        const index = this.cards.findIndex(card => card.id === this.cardForEdit.id);
        if (index !== -1) {
          this.cards[index] = { ...this.cardForEdit };
        }
        this.isLoading = false;
      }, 2000);
    }
  }
}
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.loading {
  text-align: center;
  font-size: 24px;
  margin-top: 40px;
}
</style> 