<template>
	<div
		class="bg-muted-100 dark:bg-muted-900 relative min-h-screen w-full overflow-hidden px-4"
	>
		<div
			class="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4"
		>
			<NuxtLink
				to="/"
				class="text-muted-400 hover:text-primary-500 dark:text-muted-700 dark:hover:text-primary-500 transition-colors duration-300"
			>
				<TairoLogo class="size-10" />
			</NuxtLink>
			<div>
				<BaseThemeToggle />
			</div>
		</div>
		<div class="flex w-full items-center justify-center">
			<div class="relative mx-auto w-full max-w-2xl">
				<!--Form-->
				<div class="me-auto ms-auto mt-4 w-full">
					<div class="text-center">
						<BaseHeading as="h2" size="3xl" weight="medium">
							Welcome back!
						</BaseHeading>
						<BaseParagraph size="sm" class="text-muted-400 mb-6">
							Login with social media or your credentials
						</BaseParagraph>
					</div>
					<div class="px-8 py-4">
						<div class="mb-4 space-y-4">
							<BaseInput v-model="email" type="email" />
							<BaseInput
								v-model="email"
								type="email"
								label="Email address"
								placeholder="Email address"
								:classes="{
									input: 'h-12',
								}"
							/>
						</div>
						<div class="mb-6">
							<div
								class="mt-6 flex items-center justify-between"
							></div>
						</div>
						<div class="mb-6">
							<BaseButton
								@click="signInWithOtp"
								type="submit"
								color="primary"
								class="!h-12 w-full"
							>
								Sign In
							</BaseButton>
						</div>
						<div class="mb-6 grid gap-0 sm:grid-cols-3">
							<hr
								class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
							/>
							<span
								class="bg-muted-100 dark:bg-muted-900 text-muted-400 relative top-0.5 text-center font-sans text-sm"
							>
								Or continue with
							</span>
							<hr
								class="border-muted-200 dark:border-muted-700 mt-3 hidden border-t sm:block"
							/>
						</div>
						<!--Social signup-->
						<div class="grid grid-cols-3 gap-2">
							<button
								type="button"
								class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
								@click="signInWithOAuth"
							>
								<Icon name="fa6-brands:google" class="size-5" />
							</button>
							<button
								type="button"
								class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
							>
								<Icon
									name="fa6-brands:twitter"
									class="size-5"
								/>
							</button>
							<button
								type="button"
								class="bg-muted-200 dark:bg-muted-700 dark:hover:bg-muted-600 text-muted-600 dark:text-muted-400 nui-focus relative inline-flex w-full items-center justify-center rounded px-0 py-3 text-center text-sm font-semibold shadow-sm transition-all duration-300 hover:bg-white"
							>
								<Icon
									name="fa6-brands:linkedin-in"
									class="size-5"
								/>
							</button>
						</div>

						<!--No account link-->
						<p
							class="text-muted-400 mt-4 flex justify-between font-sans text-sm leading-5"
						>
							<span>Don't have an account?</span>
							<NuxtLink
								to="#"
								class="text-primary-600 hover:text-primary-500 font-medium underline-offset-4 transition duration-150 ease-in-out hover:underline"
							>
								Sign Up
							</NuxtLink>
						</p>
					</div>
				</div>
			</div>
		</div>
		<TairoModal :open="checkEmailModal" size="sm" @close="closeModal">
			<template #header>
				<!-- Header -->
				<div
					class="flex w-full items-center justify-between p-4 md:p-6"
				>
					<h3
						class="font-heading text-muted-900 text-lg font-medium leading-6 dark:text-white"
					>
						Verificar Email
					</h3>

					<BaseButtonClose @click="closeModal" />
				</div>
			</template>

			<!-- Body -->
			<div class="p-4 md:p-6">
				<div class="mx-auto w-full max-w-xs text-center">
					<div class="relative mx-auto mb-4 flex size-24">
						<img
							src="https://media.cssninja.io/shuriken/avatars/3.svg"
							class="max-w-full rounded-full object-cover shadow-sm dark:border-transparent"
							alt=""
						/>
					</div>

					<h3
						class="font-heading text-muted-800 text-lg font-medium leading-6 dark:text-white"
					>
						Por favor! Verifique o seu email para concluir o login.
					</h3>

					<!-- <p
						class="font-alt text-muted-500 dark:text-muted-400 text-sm leading-5"
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit, sed do eiusmod.
					</p> -->
				</div>
			</div>

			<template #footer>
				<!-- Footer -->
				<div class="p-4 md:p-6">
					<div class="flex gap-x-2">
						<!-- <BaseButton @click="closeModal"> Decline </BaseButton> -->

						<BaseButton
							color="primary"
							variant="solid"
							@click="closeModal"
						>
							Accept
						</BaseButton>
					</div>
				</div>
			</template>
		</TairoModal>
	</div>
</template>

<script setup lang="ts">
definePageMeta({
	layout: "empty",
	title: "Login",
});

const supabase = useSupabaseClient();
const loading = ref(false);
const email = ref("");
const checkEmailModal = ref(false);

function closeModal() {
	checkEmailModal.value = false;
}
function openModal() {
	checkEmailModal.value = true;
}

const signInWithOtp = async () => {
	if (!email.value || !email.value.includes("@")) {
		alert("Please enter a valid email address.");
		return;
	}
	try {
		loading.value = true;
		const { error } = await supabase.auth.signInWithOtp({
			email: email.value,
		});
		if (error) throw error;
		openModal();
	} catch (error) {
		alert(error.error_description || error.message);
	} finally {
		loading.value = false;
	}
};

const signInWithOAuth = async () => {
	
	try {
		loading.value = true;
		const { error } = await supabase.auth.signInWithOAuth({
			provider: "google",
		});
		if (error) throw error;
		openModal();
	} catch (error) {
		alert(error.error_description || error.message);
	} finally {
		loading.value = false;
	}
};
</script>
