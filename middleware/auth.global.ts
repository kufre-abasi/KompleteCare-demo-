export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie("auth_token");
  // If user is not authenticated and NOT already on /login
  if (!token.value && to.path !== "/login") {
    return navigateTo("/login");
  }

  // If user is authenticated and trying to access /login
  if (token.value && to.path === "/login") {
    return navigateTo("/");
  }
});
