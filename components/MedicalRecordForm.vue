<template>
  <div class="medical-record-form bg-white rounded shadow-sm p-4">
    <!-- X-Ray Section -->
    <div class="section mb-4">
      <h3 class="text-primary mb-3">X-Ray</h3>
      <div class="row g-3">
        <div v-if="loading" class="col-12">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <template v-else>
          <div
            v-for="test in getTestsByCategory('X-Ray')"
            :key="test.id"
            class="col-md-3 col-sm-6"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :id="test.id"
                v-model="selectedTests[test.id]"
              />
              <label class="form-check-label" :for="test.id">
                {{ test.name }}
              </label>
            </div>
          </div>
        </template>
      </div>
    </div>

    <hr class="my-4" />

    <!-- Ultrasound Scan Section -->
    <div class="section mb-4">
      <h3 class="text-primary mb-3">Ultrasound Scan</h3>
      <div class="row g-3">
        <template v-if="!loading">
          <div
            v-for="test in getTestsByCategory('Ultrasound Scan')"
            :key="test.id"
            class="col-md-3 col-sm-6"
          >
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                :id="test.id"
                v-model="selectedTests[test.id]"
              />
              <label class="form-check-label" :for="test.id">
                {{ test.name }}
              </label>
            </div>
          </div>
        </template>
      </div>
    </div>

    <hr class="my-4" />

    <!-- CT Scan and MRI Section -->
    <div class="row g-4">
      <div class="col-md-6">
        <div class="section">
          <h3 class="text-primary mb-3">CT Scan</h3>
          <select class="form-select" v-model="ctScanValue">
            <option value="" disabled selected>*Specify</option>
            <template v-if="!loading">
              <option
                v-for="test in getTestsByCategory('CT Scan')"
                :key="test.id"
                :value="test.id"
              >
                {{ test.name }}
              </option>
            </template>
          </select>
        </div>
      </div>

      <div class="col-md-6">
        <div class="section">
          <h3 class="text-primary mb-3">MRI</h3>
          <select class="form-select" v-model="mriValue">
            <option value="" disabled selected>*Specify</option>
            <template v-if="!loading">
              <option
                v-for="test in getTestsByCategory('MRI')"
                :key="test.id"
                :value="test.id"
              >
                {{ test.name }}
              </option>
            </template>
          </select>
        </div>
      </div>
    </div>

    <div class="d-flex justify-content-end mt-5">
      <button
        class="btn btn-primary px-4 py-2"
        @click="submitForm"
        :disabled="submitting"
      >
        <span
          v-if="submitting"
          class="spinner-border spinner-border-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>
        Save and Send
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["submit-success"],

  setup(props, { emit }) {
    const selectedTests = ref({});
    const ctScanValue = ref("");
    const mriValue = ref("");
    const submitting = ref(false);

    // GraphQL mutation for submitting the form
    const { mutate: submitInvestigation } = useMutation(gql`
      mutation SubmitInvestigation($input: InvestigationInput!) {
        submitInvestigation(input: $input) {
          success
          message
        }
      }
    `);

    const getTestsByCategory = (categoryName) => {
      const category = props.categories.find((cat) => cat.name === categoryName);
      return category ? category.tests : [];
    };

    const submitForm = async () => {
      submitting.value = true;

      try {
        // Prepare the data for submission
        const selectedTestIds = Object.entries(selectedTests.value)
          .filter(([_, selected]) => selected)
          .map(([id]) => id);

        // Add CT Scan and MRI if selected
        if (ctScanValue.value) {
          selectedTestIds.push(ctScanValue.value);
        }

        if (mriValue.value) {
          selectedTestIds.push(mriValue.value);
        }

        // Submit the data
        const { data } = await submitInvestigation({
          input: {
            testIds: selectedTestIds,
          },
        });

        if (data.submitInvestigation.success) {
          emit("submit-success");

          // Reset form
          selectedTests.value = {};
          ctScanValue.value = "";
          mriValue.value = "";
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error (could show an error dialog)
      } finally {
        submitting.value = false;
      }
    };

    return {
      selectedTests,
      ctScanValue,
      mriValue,
      submitting,
      getTestsByCategory,
      submitForm,
    };
  },
});
</script>

<style scoped>
.medical-record-form {
  border-radius: 8px;
}

.section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #382f90;
}

.form-check-input:checked {
  background-color: #382f90;
  border-color: #382f90;
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
