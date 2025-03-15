<template>
  <main class="content container">
    <div class="content__top">
      <h1 class="content__title">Карточка товара</h1>
    </div>

    <section class="product" v-if="product">
      <div class="product__image">
        <img :src="product.image.file.url" :alt="product.title">
      </div>
      <div class="product__info">
        <h2 class="product__title">{{ product.title }}</h2>
        <p class="product__id">ID товара: {{ productId }}</p>
        <p class="product__price">{{ product.price }} ₽</p>
      </div>
    </section>
    <div v-else class="product__loading">
      Загрузка товара...
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Define the product type
interface ProductImage {
  file: {
    url: string;
  };
}

interface Product {
  id: number;
  title: string;
  price: number;
  image: ProductImage;
}

const route = useRoute();
const productId = route.params.id;
const product = ref<Product | null>(null);

// Function to get product data from the API
async function getProduct(id: string | string[]): Promise<void> {
  try {
    const response = await fetch(`https://vue-study.skillbox.cc/api/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await response.json();
    product.value = data;
  } catch (error) {
    console.error('Error fetching product:', error);
  }
}

// Fetch product data when the component is mounted
onMounted(() => {
  getProduct(productId);
});
</script>

<style>
.product {
  display: flex;
  gap: 30px;
  margin-top: 20px;
}

.product__image {
  width: 300px;
  height: 300px;
}

.product__image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product__info {
  flex-grow: 1;
}

.product__title {
  margin-top: 0;
}

.product__price {
  font-size: 24px;
  font-weight: bold;
}

.product__id {
  color: #666;
}

.product__loading {
  margin-top: 20px;
  font-size: 18px;
}
</style> 