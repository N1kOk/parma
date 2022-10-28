<template>
	<div class="w-full h-[1px] min-h-[calc(100vh-160px)] flex justify-between text-left">
		<div class="w-[40%] h-full space-y-4 ">
			<div class="text-4xl font-bold">Мой профиль</div>
			<div class="w-full h-[calc(100%-112px)] p-8 bg-black-500">
				<div class="h-full flex flex-col justify-between">
					<div class="flex space-x-12">
						<img class="h-[192px]" src="/images/man.png" alt="office">
						<div class="w-[225px] space-y-2">
							<input class="w-full px-4 text-2xl rounded-full" type="text">
							<input class="w-full px-4 text-2xl rounded-full" type="text">
							<input class="w-full px-4 text-2xl rounded-full" type="text">
							<input class="w-full px-4 text-2xl rounded-full" type="text">
							<input class="w-full px-4 text-2xl rounded-full" type="text">
						</div>
					</div>

					<div class="w-max px-4 text-2xl rounded-xl bg-red cursor-pointer">Редактировать данные</div>
				</div>
			</div>
		</div>

		<div class="w-[45%] h-full space-y-4 ">
			<div class="text-4xl font-bold">Мои брони</div>
			<div class="w-full h-[calc(100%-112px)] p-8 bg-black-500">

			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { offices } from '@/scripts/offices'
</script>
