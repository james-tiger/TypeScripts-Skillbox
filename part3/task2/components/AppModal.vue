<template>
  <transition name="modal">
    <div class="modal-overlay" v-if="value" @click.self="close">
      <div class="modal-content">
        <button class="modal-close" @click="close">&times;</button>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AppModal',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('input', false);
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #777;
}

.modal-close:hover {
  color: #333;
}

/* Transitions */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}
</style> 