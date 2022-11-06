<template>
	<div class="w-full h-[1px] min-h-[calc(100vh-160px)] flex justify-between text-left">
		<div class="w-full h-full space-y-12">
			<div class="text-4xl font-bold">Расписание бронирования</div>
			<div class="w-full min-h-[calc(100%-112px)] p-8 bg-gray-50 space-y-4">
				<div class="flex justify-between">
					<div class="flex items-center space-x-8 text-2xl font-bold">
						<div>{{ +date.split('-')[2] }} декабря 2022 г.</div>
						<div class="relative">
							<input class="absolute opacity-0" type="date" id="date" v-model="date"
							       min="2022-12-01" max="2022-12-31">
							<img class="relative w-[30px] z-50 cursor-pointer" src="/images/calendar.svg" alt="calendar"
							     onclick="document.getElementById('date').showPicker()">
						</div>
					</div>

					<div class="px-4 ml-auto flex border border-2 bg-white rounded-full space-x-8"
					     onclick="document.getElementById('search').focus()">

						<img class="w-[1.5rem] pointer-events-none" src="/images/search.svg" alt="search">
						<input class="w-[275px] h-max my-auto text-2xl font-bold placeholder-gray-50 outline-none"
						       id="search" type="text" placeholder="Поиск сотрудника" autocomplete="off">
					</div>
				</div>
				<div class="w-full h-[calc(100%-50px)] flex flex-col space-y-4 text-2xl">
					<div class="h-max w-1/2 p-4 space-y-2 text-white bg-black-500 border-2 border-black">
						<div>Офис 101</div>

						<div class="px-1 flex space-x-16 text-black bg-white rounded">
							<div>2 место</div>
							<div>ЗАНЯТО</div>
							<div class="text-red">ПОСМОТРЕТЬ</div>
						</div>

						<div class="px-1 flex space-x-16 text-black bg-white rounded">
							<div>3 место</div>
							<div>ЗАНЯТО</div>
							<div class="text-red">ПОСМОТРЕТЬ</div>
						</div>
					</div>

					<div class="h-max w-1/2 p-4 space-y-2 text-white bg-black-500 border-2 border-black">
						<div>Офис 102</div>

						<div class="px-1 flex space-x-16 text-black bg-white rounded">
							<div>2 место</div>
							<div>ЗАНЯТО</div>
							<div class="text-red">ПОСМОТРЕТЬ</div>
						</div>

						<div class="px-1 flex space-x-16 text-black bg-white rounded">
							<div>3 место</div>
							<div>ЗАНЯТО</div>
							<div class="text-red">ПОСМОТРЕТЬ</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCurrentDate } from '@/scripts/utils'

const date = ref(getCurrentDate())
</script>
