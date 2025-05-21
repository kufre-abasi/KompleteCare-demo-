<template>
  <div v-if="show" class="success-dialog-backdrop">
    <div class="success-dialog bg-white p-4 rounded shadow-lg">
      <div class="text-center mb-3">
        <i class="bi bi-check-circle-fill text-success fs-1"></i>
      </div>
      <h4 class="text-center mb-3">Success!</h4>
      <p class="text-center mb-4">Medical record has been updated successfully.</p>
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary px-4" @click="$emit('close')">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["close"],

  setup() {
    return {};
  },
});
</script>

<style scoped>
.success-dialog-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.success-dialog {
  width: 100%;
  max-width: 400px;
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.btn-primary {
  background-color: #382f90;
  border-color: #382f90;
}

.btn-primary:hover {
  background-color: #2a2470;
  border-color: #2a2470;
}
</style>
