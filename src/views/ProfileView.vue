<template>
	<div class="w-full h-[1px] min-h-[calc(100vh-160px)] flex justify-between text-left">
		<div class="w-[40%] h-full space-y-4 ">
			<div class="text-4xl font-bold">Мой профиль</div>
			<div class="w-full h-[calc(100%-112px)] p-8 bg-black-500">
				<div class="h-full flex flex-col justify-between">
					<div class="flex space-x-16">
						<img class="h-[192px]" src="/images/man.png" alt="office">
						<div class="w-[225px] space-y-2">
							<div class="relative" v-for="item in fields">
								<input class="w-full px-4 text-2xl rounded-full" type="text" v-model="item.text" :disabled="!item.isEdited">
								<img class="absolute -right-[75px] top-0 w-8 cursor-pointer" src="/images/pencil.svg" alt="pencil"
								     v-show="isEdited" @click="item.isEdited = !item.isEdited">
							</div>
						</div>
					</div>

					<div class="w-max px-4 text-2xl rounded-xl bg-red cursor-pointer" @click="isEdited = !isEdited">
						Редактировать данные
					</div>
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
import { ref } from 'vue'

const isEdited = ref(false)
const fields = ref([
	{ text: '', isEdited: false },
	{ text: '', isEdited: false },
	{ text: '', isEdited: false },
	{ text: '', isEdited: false },
	{ text: '', isEdited: false },
])
</script>
