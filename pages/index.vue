<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <Sidebar
      :activeItem="'Dashboard'"
      :isOpen="sidebarOpen"
      @update:isOpen="sidebarOpen = $event"
    />

    <!-- Main Content -->
    <div class="main-content flex-grow-1">
      <Header @toggle-sidebar="toggleSidebar" />

      <div class="container-fluid p-4">
        <h1 class="text-primary mb-2">Update Patient Medical Record</h1>
        <p class="text-muted mb-4">
          Click the tabs to view and edit patient medical details
        </p>

        <MedicalRecordForm
          :categories="categories"
          @submit-success="showSuccessDialog = true"
        />
      </div>
    </div>

    <!-- Success Dialog -->
    <SuccessDialog :show="showSuccessDialog" @close="showSuccessDialog = false" />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  setup() {
    const showSuccessDialog = ref(false);
    const categories = ref([]);
    const sidebarOpen = ref(false);

    // Query to fetch investigation categories
    const { result, loading, error } = useQuery(gql`
      query GetInvestigations {
        investigations {
          categories {
            name
            tests {
              id
              name
            }
          }
        }
      }
    `);

    // Update categories when data is loaded
    watch(result, (data) => {
      if (data && data.investigations) {
        categories.value = data.investigations.categories;
      }
    });

    const toggleSidebar = () => {
      sidebarOpen.value = !sidebarOpen.value;
    };

    return {
      showSuccessDialog,
      categories,
      loading,
      error,
      sidebarOpen,
      toggleSidebar,
    };
  },
});
</script>

<style scoped>
.main-content {
  min-height: 100vh;
  background-color: #f8f9fa;
}

@media (max-width: 767.98px) {
  .main-content {
    width: 100%;
  }
}
</style>
