import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, mergeProps, ref, watch, useSSRContext } from 'vue';
import { _ as _export_sfc, d as useCookie, u as useRouter } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useQuery, useMutation } from '@vue/apollo-composable';
import gql from 'graphql-tag';
import 'vue-bundle-renderer/runtime';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'node:zlib';
import 'node:stream';
import 'node:util';
import 'node:url';
import 'node:net';
import 'vue-router';
import '@apollo/client/core/index.js';
import '@apollo/client/link/error/index.js';

const _sfc_main$4 = defineComponent({
  props: {
    activeItem: {
      type: String,
      default: "Dashboard"
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:isOpen"],
  setup(props, { emit }) {
    const collapsed = ref(false);
    const isMobile = ref(false);
    const cookies = useCookie("auth_token");
    const router = useRouter();
    const toggleSidebar = () => {
      collapsed.value = !collapsed.value;
    };
    const closeSidebar = () => {
      emit("update:isOpen", false);
    };
    const navigateTo = (item) => {
      console.log(`Navigate to ${item}`);
      if (isMobile.value) {
        closeSidebar();
      }
    };
    const logout = () => {
      cookies.value = null;
      router.push("/login");
      console.log("Logging out");
      if (isMobile.value) {
        closeSidebar();
      }
    };
    return {
      collapsed,
      isMobile,
      toggleSidebar,
      closeSidebar,
      navigateTo,
      logout
    };
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-4f80ee51>`);
  if (_ctx.isOpen && _ctx.isMobile) {
    _push(`<div class="sidebar-backdrop" data-v-4f80ee51></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{
    "sidebar-open": _ctx.isOpen && _ctx.isMobile,
    "sidebar-collapsed": _ctx.collapsed && !_ctx.isMobile
  }, "sidebar bg-white shadow-sm"])}" data-v-4f80ee51><div class="sidebar-header d-flex align-items-center justify-content-end py-5 p-3" data-v-4f80ee51><button class="btn-close d-md-none" aria-label="Close sidebar" data-v-4f80ee51></button></div><div class="sidebar-items" data-v-4f80ee51><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Dashboard" }
  ])}" data-v-4f80ee51><i class="bi bi-grid-1x2-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Dashboard</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Profile" }
  ])}" data-v-4f80ee51><i class="bi bi-person-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Profile</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Services" }
  ])}" data-v-4f80ee51><i class="bi bi-dropbox me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Services</span>`);
  } else {
    _push(`<!---->`);
  }
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<i class="bi bi-chevron-down ms-auto" data-v-4f80ee51></i>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Medical Records" }
  ])}" data-v-4f80ee51><i class="bi bi-file-medical-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Medical Records</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Care Wallet" }
  ])}" data-v-4f80ee51><i class="bi bi-wallet me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Care Wallet</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Messages" }
  ])}" data-v-4f80ee51><i class="bi bi-chat-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Messages</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Resources" }
  ])}" data-v-4f80ee51><i class="bi bi-folder-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Resources</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="sidebar-divider my-3" data-v-4f80ee51></div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Account Settings" }
  ])}" data-v-4f80ee51><i class="bi bi-gear-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Account Settings</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Contact Support" }
  ])}" data-v-4f80ee51><i class="bi bi-question-circle-fill me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Contact Support</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="${ssrRenderClass([
    "sidebar-item d-flex align-items-center",
    { active: _ctx.activeItem === "Logout" }
  ])}" data-v-4f80ee51><i class="bi bi-box-arrow-right me-3" data-v-4f80ee51></i>`);
  if (!_ctx.collapsed || _ctx.isMobile) {
    _push(`<span data-v-4f80ee51>Logout</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="sidebar-toggle d-none d-md-block" data-v-4f80ee51><i class="${ssrRenderClass([_ctx.collapsed ? "bi-arrow-right-square" : "bi-arrow-left-square", "bi"])}" data-v-4f80ee51></i></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-4f80ee51"]]);
const _imports_0 = "" + buildAssetsURL("myProfile.BtzMDj3X.svg");
const _sfc_main$3 = defineComponent({
  emits: ["toggle-sidebar"],
  setup(props, { emit }) {
    const toggleSidebar = () => {
      emit("toggle-sidebar");
    };
    return {
      toggleSidebar
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "header d-flex justify-content-md-end justify-content-between align-items-center py-md-4 p-3" }, _attrs))} data-v-414ae599><button class="btn btn-light d-md-none" aria-label="Toggle sidebar" data-v-414ae599><i class="bi bi-list fs-5" data-v-414ae599></i></button><div class="d-flex align-items-center" data-v-414ae599><a href="#" class="text-decoration-none me-4 text-primary" data-v-414ae599>Take a tour</a><div class="position-relative me-4" data-v-414ae599><i class="bi bi-envelope fs-5 text-secondary" data-v-414ae599></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" data-v-414ae599> 2 </span></div><div class="position-relative me-4" data-v-414ae599><i class="bi bi-bell fs-5 text-secondary" data-v-414ae599></i><span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" data-v-414ae599> 5 </span></div><div class="avatar" data-v-414ae599><img${ssrRenderAttr("src", _imports_0)} alt="User Avatar" class="rounded-circle" width="40" height="40" data-v-414ae599></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-414ae599"]]);
const _sfc_main$2 = defineComponent({
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ["submit-success"],
  setup(props, { emit }) {
    const selectedTests = ref({});
    const ctScanValue = ref("");
    const mriValue = ref("");
    const submitting = ref(false);
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
        const selectedTestIds = Object.entries(selectedTests.value).filter(([_, selected]) => selected).map(([id]) => id);
        if (ctScanValue.value) {
          selectedTestIds.push(ctScanValue.value);
        }
        if (mriValue.value) {
          selectedTestIds.push(mriValue.value);
        }
        const { data } = await submitInvestigation({
          input: {
            testIds: selectedTestIds
          }
        });
        if (data.submitInvestigation.success) {
          emit("submit-success");
          selectedTests.value = {};
          ctScanValue.value = "";
          mriValue.value = "";
        }
      } catch (error) {
        console.error("Error submitting form:", error);
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
      submitForm
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "medical-record-form bg-white rounded shadow-sm p-4" }, _attrs))} data-v-0d6027a6><div class="section mb-4" data-v-0d6027a6><h3 class="text-primary mb-3" data-v-0d6027a6>X-Ray</h3><div class="row g-3" data-v-0d6027a6>`);
  if (_ctx.loading) {
    _push(`<div class="col-12" data-v-0d6027a6><div class="spinner-border text-primary" role="status" data-v-0d6027a6><span class="visually-hidden" data-v-0d6027a6>Loading...</span></div></div>`);
  } else {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.getTestsByCategory("X-Ray"), (test) => {
      _push(`<div class="col-md-3 col-sm-6" data-v-0d6027a6><div class="form-check" data-v-0d6027a6><input class="form-check-input" type="checkbox"${ssrRenderAttr("id", test.id)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedTests[test.id]) ? ssrLooseContain(_ctx.selectedTests[test.id], null) : _ctx.selectedTests[test.id]) ? " checked" : ""} data-v-0d6027a6><label class="form-check-label"${ssrRenderAttr("for", test.id)} data-v-0d6027a6>${ssrInterpolate(test.name)}</label></div></div>`);
    });
    _push(`<!--]-->`);
  }
  _push(`</div></div><hr class="my-4" data-v-0d6027a6><div class="section mb-4" data-v-0d6027a6><h3 class="text-primary mb-3" data-v-0d6027a6>Ultrasound Scan</h3><div class="row g-3" data-v-0d6027a6>`);
  if (!_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.getTestsByCategory("Ultrasound Scan"), (test) => {
      _push(`<div class="col-md-3 col-sm-6" data-v-0d6027a6><div class="form-check" data-v-0d6027a6><input class="form-check-input" type="checkbox"${ssrRenderAttr("id", test.id)}${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedTests[test.id]) ? ssrLooseContain(_ctx.selectedTests[test.id], null) : _ctx.selectedTests[test.id]) ? " checked" : ""} data-v-0d6027a6><label class="form-check-label"${ssrRenderAttr("for", test.id)} data-v-0d6027a6>${ssrInterpolate(test.name)}</label></div></div>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><hr class="my-4" data-v-0d6027a6><div class="row g-4" data-v-0d6027a6><div class="col-md-6" data-v-0d6027a6><div class="section" data-v-0d6027a6><h3 class="text-primary mb-3" data-v-0d6027a6>CT Scan</h3><select class="form-select" data-v-0d6027a6><option value="" disabled selected data-v-0d6027a6>*Specify</option>`);
  if (!_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.getTestsByCategory("CT Scan"), (test) => {
      _push(`<option${ssrRenderAttr("value", test.id)} data-v-0d6027a6${ssrIncludeBooleanAttr(Array.isArray(_ctx.ctScanValue) ? ssrLooseContain(_ctx.ctScanValue, test.id) : ssrLooseEqual(_ctx.ctScanValue, test.id)) ? " selected" : ""}>${ssrInterpolate(test.name)}</option>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</select></div></div><div class="col-md-6" data-v-0d6027a6><div class="section" data-v-0d6027a6><h3 class="text-primary mb-3" data-v-0d6027a6>MRI</h3><select class="form-select" data-v-0d6027a6><option value="" disabled selected data-v-0d6027a6>*Specify</option>`);
  if (!_ctx.loading) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.getTestsByCategory("MRI"), (test) => {
      _push(`<option${ssrRenderAttr("value", test.id)} data-v-0d6027a6${ssrIncludeBooleanAttr(Array.isArray(_ctx.mriValue) ? ssrLooseContain(_ctx.mriValue, test.id) : ssrLooseEqual(_ctx.mriValue, test.id)) ? " selected" : ""}>${ssrInterpolate(test.name)}</option>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</select></div></div></div><div class="d-flex justify-content-end mt-5" data-v-0d6027a6><button class="btn btn-primary px-4 py-2"${ssrIncludeBooleanAttr(_ctx.submitting) ? " disabled" : ""} data-v-0d6027a6>`);
  if (_ctx.submitting) {
    _push(`<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" data-v-0d6027a6></span>`);
  } else {
    _push(`<!---->`);
  }
  _push(` Save and Send </button></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MedicalRecordForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-0d6027a6"]]);
const _sfc_main$1 = defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup() {
    return {};
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if (_ctx.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({ class: "success-dialog-backdrop" }, _attrs))} data-v-b7034c20><div class="success-dialog bg-white p-4 rounded shadow-lg" data-v-b7034c20><div class="text-center mb-3" data-v-b7034c20><i class="bi bi-check-circle-fill text-success fs-1" data-v-b7034c20></i></div><h4 class="text-center mb-3" data-v-b7034c20>Success!</h4><p class="text-center mb-4" data-v-b7034c20>Medical record has been updated successfully.</p><div class="d-flex justify-content-center" data-v-b7034c20><button class="btn btn-primary px-4" data-v-b7034c20>Close</button></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SuccessDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b7034c20"]]);
const _sfc_main = defineComponent({
  setup() {
    const showSuccessDialog = ref(false);
    const categories = ref([]);
    const sidebarOpen = ref(false);
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
      toggleSidebar
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = __nuxt_component_0;
  const _component_Header = __nuxt_component_1;
  const _component_MedicalRecordForm = __nuxt_component_2;
  const _component_SuccessDialog = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "d-flex" }, _attrs))} data-v-99dafacf>`);
  _push(ssrRenderComponent(_component_Sidebar, {
    activeItem: "Dashboard",
    isOpen: _ctx.sidebarOpen,
    "onUpdate:isOpen": ($event) => _ctx.sidebarOpen = $event
  }, null, _parent));
  _push(`<div class="main-content flex-grow-1" data-v-99dafacf>`);
  _push(ssrRenderComponent(_component_Header, { onToggleSidebar: _ctx.toggleSidebar }, null, _parent));
  _push(`<div class="container-fluid p-4" data-v-99dafacf><h1 class="text-primary mb-2" data-v-99dafacf>Update Patient Medical Record</h1><p class="text-muted mb-4" data-v-99dafacf> Click the tabs to view and edit patient medical details </p>`);
  _push(ssrRenderComponent(_component_MedicalRecordForm, {
    categories: _ctx.categories,
    onSubmitSuccess: ($event) => _ctx.showSuccessDialog = true
  }, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_SuccessDialog, {
    show: _ctx.showSuccessDialog,
    onClose: ($event) => _ctx.showSuccessDialog = false
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-99dafacf"]]);

export { index as default };
//# sourceMappingURL=index-C9Dc4I8P.mjs.map
