<script setup>
// const user = useSupabaseUser()
const user = useSupabaseUser();
if (!user.value) {
	const {
		data: { session },
	} = await supabase.auth.getSession();
	if (session) {
		user.value = session.user;
	}
}
</script>

<template>
	<div class="container" style="padding: 50px 0 100px 0">
		<Account v-if="user" />
	</div>
</template>
