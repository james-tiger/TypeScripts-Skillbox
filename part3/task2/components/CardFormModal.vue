<template>
  <div class="card-form">
    <h2>Редактирование курса</h2>
    
    <div class="form-group">
      <label for="title">Название курса:</label>
      <input 
        id="title"
        type="text"
        :value="card.title"
        @input="updateField('title', $event.target.value)"
        class="form-control"
      >
    </div>
    
    <div class="form-group">
      <label for="description">Описание курса:</label>
      <input 
        id="description"
        type="text"
        :value="card.description"
        @input="updateField('description', $event.target.value)"
        class="form-control"
      >
    </div>
    
    <div class="form-actions">
      <button class="btn btn-save" @click="saveCard">Сохранить</button>
      <button class="btn btn-cancel" @click="cancel">Отменить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardFormModal',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateField(field, value) {
      const updatedCard = { ...this.card, [field]: value };
      this.$emit('update-card', updatedCard);
    },
    saveCard() {
      this.$emit('save-card', this.card);
    },
    cancel() {
      this.$emit('cancel');
    }
  }
}
</script>

<style scoped>
.card-form {
  padding: 20px;
  max-width: 500px;
}

h2 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: normal;
}

.form-control {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  box-sizing: border-box;
}

.form-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  width: 100%;
  text-align: center;
}

.btn-save {
  background-color: #9f9; /* Light green */
  color: black;
}

.btn-cancel {
  background-color: #ddd; /* Light gray */
  color: black;
}
</style> 