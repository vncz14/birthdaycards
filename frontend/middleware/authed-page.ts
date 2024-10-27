export default defineNuxtRouteMiddleware((to, from) => {
    if (!useUserSession().loggedIn.value && to.path !== "/login") {
        return navigateTo(
            to.path !== "/" ? `/login?redirect=${to.fullPath}` : "/login"
        );
    }
});
