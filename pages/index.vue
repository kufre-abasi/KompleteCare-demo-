<template>
  <div class="container-fluid px-0" style="background: #f5f5fb">
    <div class="row g-0" mx-0>
      <!-- Sidebar -->
      <div class="col-md-2 d-none d-md-block sidebar" style="background: #ffff">
        <!-- Logo -->
        <!-- Navigation Items -->
        <ul class="nav flex-column custom-mt hidden">
          <li
            class="nav-item"
            v-for="item in navItems"
            :key="item.text"
            :style="item.style"
          >
            <a
              v-if="item.text !== 'Logout'"
              class="nav-link"
              style="me-3"
              :class="{ active: item.active }"
              :style="item.active ? activeStyle : inactiveStyle"
            >
              <img
                :src="'/icons/' + item.icon"
                :alt="item.text"
                class="nav-icon me-3"
              />
              {{ item.text }}
            </a>

            <button
              v-else
              :style="item.active ? activeStyle : inactiveStyle"
              class="logOut"
              @click="handleLogout"
            >
              <img
                :src="'/icons/' + item.icon"
                :alt="item.text"
                class="nav-icon me-3"
              />
              {{ item.text }}
            </button>
          </li>
        </ul>
      </div>

      <!-- Main Content -->
      <div class="col-md-10 hidden">
        <div
          class="d-flex align-items-center justify-content-end gap-4 border-5 mt-5"
        >
          <p class="mb-0">Take a tour</p>
          <img src="/icons/inbox.svg" alt="inbox" />
          <img src="/icons/notification.svg" alt="notification" />
          <img src="/icons/myProfile.svg" alt="myProfile" />
        </div>
        <div class="mainContent">
          <h1>Update Patient Medical Record</h1>
          <h5>Click the tabs to view and edit patient medical details</h5>
          <div class="patientRecord">
            <template v-if="investigationsArray.length > 0 && !showLoading">
              <div
                v-for="{ id, title, investigations } in investigationsArray"
                :key="id"
              >
                <h3 class="p-5">{{ title }}</h3>

                <ul>
                  <li
                    v-for="investigation in investigations"
                    :key="investigation.id"
                  >
                    {{ investigation.title }} - {{ investigation.id }}
                  </li>
                </ul>
              </div>
            </template>
            <template v-else> LOADING... </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from "@vue/apollo-composable";
import { INVESTIGATIONS_REQUEST } from "~/api/testAPI";
const { result, loading: showLoading } = useQuery(INVESTIGATIONS_REQUEST);
const investigationsArray = ref([]);
const cookies = useCookie("auth_token");
const router = useRouter();
const activeStyle = {
  backgroundColor: "#2A36A4",
  color: "white",
};

const inactiveStyle = {
  color: "#A0A0A0",
};

const navItems = [
  { icon: "dashboard.svg", text: "Dashboard", active: true },
  { icon: "profile.svg", text: "Profile", active: false },
  { icon: "service.svg", text: "Services", active: false },
  { icon: "medRecord.svg", text: "Medical Records", active: false },
  { icon: "wallet.svg", text: "Care Wallet", active: false },
  { icon: "message.svg", text: "Messages", active: false },
  { icon: "resources.svg", text: "Resources", active: false },
  {
    icon: "settings.svg",
    text: "Account Settings",
    active: false,
    style: {
      "border-top": "1px solid #DFE0EB",
    },
  },
  { icon: "support.svg", text: "Contact Support", active: false },
  { icon: "logout.svg", text: "Logout", active: false },
];

watch(result, (data) => {
  investigationsArray.value = data;
});

const handleLogout = () => {
  cookies.value = null;
  router.push("/login");
};
</script>

<style scoped>
.sidebar {
  min-height: 100vh;
  position: sticky;
  top: 0;
}

.row {
  display: flex;
  flex-wrap: nowrap;
}

.custom-mt {
  margin-top: 150px !important;
}

.mainContent {
  margin-left: 72px !important;
  margin-top: 36px;
}

.mainContent h1 {
  color: #382f90;
  font-size: 32px !important;
  font-weight: 900;
  margin-bottom: 13px;
  line-height: 100%;
}

.mainContent h5 {
  color: #9fa2b4;
  font-size: 16px !important;
  font-weight: 500;
  margin-bottom: 42px;
}

.patientRecord {
  background: #ffff;
}

.patientRecord h3 {
  font-size: 18px !important;
  font-weight: 900;
  color: #382f90;
}

.logOut {
  cursor: pointer;
}
</style>
