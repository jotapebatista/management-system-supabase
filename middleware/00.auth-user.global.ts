export default defineNuxtRouteMiddleware((to, from) => {
	const user = useSupabaseUser();
	// console.log('running from middleware')
	if (!user.value && to.path !== "/login") {
		return navigateTo("/login");
	}
});
