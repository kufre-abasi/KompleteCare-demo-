<template>
  <div
    class="header d-flex justify-content-md-end justify-content-between align-items-center py-md-4 p-3"
  >
    <!-- Mobile Sidebar Toggle -->
    <button
      class="btn btn-light d-md-none"
      @click="toggleSidebar"
      aria-label="Toggle sidebar"
    >
      <i class="bi bi-list fs-5"></i>
    </button>

    <div class="d-flex align-items-center">
      <a href="#" class="text-decoration-none me-4 text-primary">Take a tour</a>
      <div class="position-relative me-4">
        <i class="bi bi-envelope fs-5 text-secondary"></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          2
        </span>
      </div>
      <div class="position-relative me-4">
        <i class="bi bi-bell fs-5 text-secondary"></i>
        <span
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          5
        </span>
      </div>
      <div class="avatar">
        <img
          src="/public/icons/myProfile.svg"
          alt="User Avatar"
          class="rounded-circle"
          width="40"
          height="40"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["toggle-sidebar"],

  setup(props, { emit }) {
    const toggleSidebar = () => {
      emit("toggle-sidebar");
    };

    return {
      toggleSidebar,
    };
  },
});
</script>

<style scoped>
/* .header {
  height: 70px;
} */
</style>
