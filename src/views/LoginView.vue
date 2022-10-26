<template>
	<div class="w-[500px] mx-auto p-8 bg-black-500">
		<div class="w-[300px] mx-auto space-y-12">
			<div class="w-full flex flex-col space-y-4">
				<input type="text" placeholder="Логин">
				<input type="password" placeholder="Пароль">
				<RouterLink class="text-white text-xl underline underline-offset-4" to="/restore">Забыли пароль?</RouterLink>
			</div>
			<div class="w-full flex flex-col space-y-4 text-white text-2xl font-bold">
				<button class="p-2 bg-red">Войти</button>
				<RouterLink to="/reg">Регистрация</RouterLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>