<template>
  <div>
    <button class="loginBTN" @click="login" :disabled="loading">
      {{ loading ? "Logging In" : "Login" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMutation } from "@vue/apollo-composable";
import { LOGIN_MUTATION } from "~/api/testAPI";

const loginInfo = ref({
  email: "tester@kompletecare.com",
  password: "password",
});

const loading = ref(false);
const cookies = useCookie("auth_token"); // 👈 get the cookies API
// 1) Set a cookie:

const { mutate: loginMutation } = useMutation(LOGIN_MUTATION, {
  clientId: "custom",
});

const login = async () => {
  const { email, password } = loginInfo.value;
  loading.value = true;
  try {
    const { data } = await loginMutation({
      email,
      password,
    });
    const token = data.login;
    cookies.value = token;
    navigateTo("/");
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped></style>
