<template>
  <main class="content container">
    <section class="calculator-container">
      <div class="calculator-form">
        <div class="calculator-field">
          <label>Количество месяцев:</label>
          <input 
            v-model.number="months" 
            type="number" 
            min="1" 
            max="60"
          >
        </div>
        
        <div class="calculator-field">
          <label>Процентная ставка вклада:</label>
          <input 
            v-model.number="rate" 
            type="number" 
            min="0.1" 
            max="100" 
            step="0.1"
          >
        </div>
        
        <div class="calculator-field">
          <label>Сумма вклада:</label>
          <input 
            v-model.number="amount" 
            type="number" 
            min="1000"
          >
        </div>
      </div>

      <div class="calculator-result">
        <div class="result-label">Доход:</div>
        <div class="result-value">{{ formattedProfit }}</div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue';

// Calculator state
const months = ref<number>(3);
const rate = ref<number>(15);
const amount = ref<number>(100000);
const profit = ref<number>(0);

// Store default values for reset
const defaultValues = {
  months: 3,
  rate: 15,
  amount: 100000
};

// Format profit with spaces and ruble sign
const formattedProfit = computed(() => {
  return new Intl.NumberFormat('ru-RU').format(profit.value);
});

// Function to calculate profit (simulates API call)
async function getCalculatedProfit(): Promise<void> {
  try {
    // Simulate API request
    const monthlyRate = rate.value / 12 / 100;
    const calculatedProfit = amount.value * monthlyRate * months.value;
    
    // Simulating response delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    profit.value = Number(calculatedProfit.toFixed(2));
  } catch (error) {
    console.error('Error calculating profit:', error);
  }
}

// Debounce function to prevent excessive API calls
function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>): void {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    timeoutId = setTimeout(() => {
      fn(...args);
      timeoutId = null;
    }, delay);
  };
}

// Debounced version of getCalculatedProfit
const debouncedGetCalculatedProfit = debounce(getCalculatedProfit, 200);

// Watch for changes in input fields
watch([months, rate, amount], () => {
  debouncedGetCalculatedProfit();
}, { immediate: true });

// Check scroll position and reset form if needed
function checkScroll(): void {
  if (window.scrollY > 600) {
    // Reset form to default values
    months.value = defaultValues.months;
    rate.value = defaultValues.rate;
    amount.value = defaultValues.amount;
  }
}

// Add scroll event listener on mount
onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  // Calculate initial profit
  getCalculatedProfit();
});

// Remove event listener before unmounting to prevent memory leaks
onBeforeUnmount(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style>
.calculator-container {
  width: 100%;
  max-width: 700px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.calculator-form {
  margin-bottom: 20px;
}

.calculator-field {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.calculator-field label {
  flex: 1;
  font-weight: normal;
  font-size: 16px;
}

.calculator-field input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  min-width: 250px;
}

.calculator-result {
  display: flex;
  align-items: center;
}

.result-label {
  flex: 1;
  font-size: 16px;
  font-weight: normal;
}

.result-value {
  flex: 1;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  background-color: #f0f0f0;
  padding: 10px;
  min-width: 250px;
  border-radius: 4px;
}
</style> 