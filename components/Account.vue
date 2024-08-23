<script setup>
const supabase = useSupabaseClient();

const loading = ref(true);
const username = ref("");
const website = ref("");
const avatar_path = ref("");

const user = useSupabaseUser();

const fetchProfile = async () => {
	loading.value = true;
	try {
		const { data } = await supabase
			.from("profiles")
			.select("username, website, avatar_url")
			.eq("id", user.value.id)
			.single();

		if (data) {
			console.log(data)
			username.value = data.username;
			website.value = data.website;
			avatar_path.value = data.avatar_url;
		}
	} catch (error) {
		console.error("Error fetching profile:", error.message);
	} finally {
		loading.value = false;
	}
};

fetchProfile();

const updateProfile = async () => {
	try {
		loading.value = true;

		const updates = {
			id: user.value.id,
			username: username.value,
			website: website.value,
			avatar_url: avatar_path.value,
			updated_at: new Date(),
		};

		const { error } = await supabase.from("profiles").upsert(updates, {
			returning: "minimal",
		});

		if (error) throw error;
		// Show a success message
	} catch (error) {
		console.error("Error updating profile:", error.message);
	} finally {
		loading.value = false;
	}
};

const signOut = async () => {
	try {
		loading.value = true;
		const { error } = await supabase.auth.signOut();
		if (error) throw error;
		user.value = null;
		navigateTo("/login");
	} catch (error) {
		console.error("Error signing out:", error.message);
	} finally {
		loading.value = false;
	}
};
</script>

<template>
	<div
		class="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
	>
		<h2
			class="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200"
		>
			Your Account
		</h2>

		<form @submit.prevent="updateProfile" class="space-y-4">
			<BaseInput
				id="email"
				label="Email"
				type="email"
				v-model="user.email"
				disabled
				class="w-full"
			/>

			<BaseInput
				id="username"
				label="Username"
				v-model="username"
				type="text"
				placeholder="Enter your username"
				class="w-full"
			/>

			<BaseInput
				id="website"
				label="Website"
				v-model="website"
				type="url"
				placeholder="https://example.com"
				class="w-full"
			/>

			<BaseButton
				type="submit"
				color="primary"
				class="w-full"
				:loading="loading"
				:disabled="loading"
			>
				{{ loading ? "Updating..." : "Update Profile" }}
			</BaseButton>

			<BaseButton
				@click="signOut"
				color="secondary"
				class="w-full"
				:loading="loading"
				:disabled="loading"
			>
				{{ loading ? "Signing Out..." : "Sign Out" }}
			</BaseButton>
		</form>
	</div>
</template>
