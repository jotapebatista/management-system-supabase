export default defineNuxtConfig({
	devtools: false,
	extends: ["./layers/tairo", "./layers/tairo-layout-collapse"],
	css: ["~/assets/css/main.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
	ssr: false,
	supabase: {
		url: import.meta.env.SUPABASE_URL,
		key: import.meta.env.SUPABASE_KEY,
		// url: process.env.SUPABASE_URL,
		// key: process.env.SUPABASE_KEY,
		redirectOptions: {
			login: "/login",
			callback: "/confirm",
		},
	},

	compatibilityDate: "2024-08-22",
});
