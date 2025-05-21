<template>
  <div>
    <!-- Mobile Backdrop Overlay -->
    <div v-if="isOpen && isMobile" class="sidebar-backdrop" @click="closeSidebar"></div>

    <!-- Sidebar -->
    <div
      class="sidebar bg-white shadow-sm"
      :class="{
        'sidebar-open': isOpen && isMobile,
        'sidebar-collapsed': collapsed && !isMobile,
      }"
    >
      <div class="sidebar-header d-flex align-items-center justify-content-end py-5 p-3">
        <!-- <div class="d-flex align-items-center">
          <span class="fw-bold text-primary">Medical Records</span>
        </div> -->
        <button
          class="btn-close d-md-none"
          @click="closeSidebar"
          aria-label="Close sidebar"
        ></button>
      </div>

      <div class="sidebar-items">
        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Dashboard' },
          ]"
          @click="navigateTo('Dashboard')"
        >
          <i class="bi bi-grid-1x2-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Dashboard</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Profile' },
          ]"
          @click="navigateTo('Profile')"
        >
          <i class="bi bi-person-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Profile</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Services' },
          ]"
          @click="navigateTo('Services')"
        >
          <i class="bi bi-dropbox me-3"></i>
          <span v-if="!collapsed || isMobile">Services</span>
          <i v-if="!collapsed || isMobile" class="bi bi-chevron-down ms-auto"></i>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Medical Records' },
          ]"
          @click="navigateTo('Medical Records')"
        >
          <i class="bi bi-file-medical-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Medical Records</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Care Wallet' },
          ]"
          @click="navigateTo('Care Wallet')"
        >
          <i class="bi bi-wallet me-3"></i>
          <span v-if="!collapsed || isMobile">Care Wallet</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Messages' },
          ]"
          @click="navigateTo('Messages')"
        >
          <i class="bi bi-chat-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Messages</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Resources' },
          ]"
          @click="navigateTo('Resources')"
        >
          <i class="bi bi-folder-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Resources</span>
        </div>

        <div class="sidebar-divider my-3"></div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Account Settings' },
          ]"
          @click="navigateTo('Account Settings')"
        >
          <i class="bi bi-gear-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Account Settings</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Contact Support' },
          ]"
          @click="navigateTo('Contact Support')"
        >
          <i class="bi bi-question-circle-fill me-3"></i>
          <span v-if="!collapsed || isMobile">Contact Support</span>
        </div>

        <div
          :class="[
            'sidebar-item d-flex align-items-center',
            { active: activeItem === 'Logout' },
          ]"
          @click="logout"
        >
          <i class="bi bi-box-arrow-right me-3"></i>
          <span v-if="!collapsed || isMobile">Logout</span>
        </div>
      </div>

      <div class="sidebar-toggle d-none d-md-block" @click="toggleSidebar">
        <i
          class="bi"
          :class="collapsed ? 'bi-arrow-right-square' : 'bi-arrow-left-square'"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from "vue";

export default defineComponent({
  props: {
    activeItem: {
      type: String,
      default: "Dashboard",
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },

  emits: ["update:isOpen"],

  setup(props, { emit }) {
    const collapsed = ref(false);
    const isMobile = ref(false);
    const cookies = useCookie("auth_token");
    const router = useRouter();

    const checkMobile = () => {
      isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener("resize", checkMobile);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", checkMobile);
    });

    const toggleSidebar = () => {
      collapsed.value = !collapsed.value;
    };

    const closeSidebar = () => {
      emit("update:isOpen", false);
    };

    const navigateTo = (item) => {
      // Navigation logic would go here
      console.log(`Navigate to ${item}`);
      // Close sidebar on mobile after navigation
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
      logout,
    };
  },
});
</script>

<style scoped>
.sidebar {
  width: 260px;
  min-height: 100vh;
  transition: all 0.3s ease;
  z-index: 1030;
}

.sidebar-collapsed {
  width: 70px;
}

.sidebar-header {
  height: 60px;
}

.sidebar-items {
  padding: 1rem 0;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
}

.sidebar-item {
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  color: #6c757d;
  transition: all 0.2s;
}

.sidebar-item:hover {
  background-color: #f8f9fa;
  color: #382f90;
}

.sidebar-item.active {
  background-color: #382f90;
  color: white;
}

.sidebar-divider {
  height: 1px;
  background-color: #e9ecef;
  margin: 0 1.5rem;
}

.sidebar-toggle {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: #6c757d;
}

.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1020;
  transition: opacity 0.3s ease;
}

@media (max-width: 767.98px) {
  .sidebar {
    position: fixed;
    left: -100%;
    top: 0;
    height: 100%;
    transition: left 0.3s ease;
  }

  .sidebar-open {
    left: 0;
  }
}
</style>
