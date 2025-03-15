<template>
  <form @submit.prevent="onSave" class="form">
    <div class="form-group">
      <label for="title">Название курса</label>
      <input
        id="title"
        v-model="form.title"
        type="text"
        required
        class="form-control"
      />
    </div>

    <div class="form-group">
      <label for="description">Описание</label>
      <textarea
        id="description"
        v-model="form.description"
        required
        class="form-control"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="category">Категория</label>
      <select
        id="category"
        v-model="form.categoryId"
        required
        class="form-control"
      >
        <option value="" disabled>Выберите категорию</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <button type="submit" class="btn btn-primary">Добавить курс</button>
  </form>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  categories: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['update:modelValue', 'save']);

const form = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
});

function onSave() {
  emit('save');
}
</script>

<style scoped>
.form {
  max-width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

textarea.form-control {
  min-height: 100px;
  resize: vertical;
}

.btn {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn:hover {
  background-color: #0069d9;
}
</style> 