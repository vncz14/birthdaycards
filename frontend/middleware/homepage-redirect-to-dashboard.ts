export default defineNuxtRouteMiddleware((to, from) => {
    if (useUserSession().loggedIn.value) {
        return navigateTo("/dashboard");
    }
});
