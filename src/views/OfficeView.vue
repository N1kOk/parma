<template>
	<div class="w-full min-h-[calc(100vh-160px)] text-left space-y-8">
		<div class="min-h-[inherit] flex flex-col justify-between">
			<div class="flex h-[75px]">
				<div class="flex space-x-16">
					<RouterLink to="/user">
						<img class="h-full" src="/images/user.svg" alt="user">
					</RouterLink>
					<RouterLink to="/calendar">
						<img class="h-full" src="/images/calendar.svg" alt="calendar">
					</RouterLink>
				</div>
				<div class="px-10 py-4 ml-auto flex border border-2 rounded-full space-x-8"
				     onclick="document.getElementById('search').focus()">

					<img class="pointer-events-none" src="/images/search.svg" alt="search">
					<input class="w-[300px] h-max my-auto text-3xl font-bold placeholder-gray-50 outline-none"
					       id="search" type="text" placeholder="Поиск сотрудника" autocomplete="off">
				</div>
			</div>

			<div class="flex justify-between items-end">
				<div class="w-[75px] p-4 flex flex-col space-y-4 text-center bg-gray-50">
					<div class="font-bold">Этаж</div>
					<div class="cursor-pointer select-none" v-html="floorIcons[i - 1]" v-for="i in 4"
					     :class="currentFloor === i && 'text-red'"
					@click="currentFloor = i"/>
				</div>

				<div class="w-[70%] px-16 py-8 bg-gray-50">
					<div class="w-[550px] mx-auto flex flex-wrap gap-[50px]">
						<div class="relative w-[150px] h-[150px] bg-white" v-for="i in 5">
							<div class="h-[calc(100%-24px)] flex flex-wrap">
								<div class="w-[20%] h-[20%] m-[15%] bg-black" v-for="i in 4"></div>
							</div>
							<div class="text-center font-bold">{{ currentFloor * 100 + i }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { setCurrentOffice } from '@/scripts/offices'
import { ref } from 'vue'

const currentFloor = ref(1)
const officeId = +useRoute().params.officeId

const floorIcons = [
	`<svg class="w-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.54545 9.09091H0V45.4545C0 47.9545 2.04545 50 4.54545 50H40.9091V45.4545H4.54545V9.09091ZM29.5455 31.8182H34.0909V9.09091H25V13.6364H29.5455V31.8182ZM45.4545 0H13.6364C11.1364 0 9.09091 2.04545 9.09091 4.54545V36.3636C9.09091 38.8636 11.1364 40.9091 13.6364 40.9091H45.4545C47.9545 40.9091 50 38.8636 50 36.3636V4.54545C50 2.04545 47.9545 0 45.4545 0ZM45.4545 36.3636H13.6364V4.54545H45.4545V36.3636Z" fill="currentColor"/>
	</svg>`,
	`<svg class="w-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.54545 9.09091H0V45.4545C0 47.9545 2.04545 50 4.54545 50H40.9091V45.4545H4.54545V9.09091ZM45.4545 0H13.6364C11.1364 0 9.09091 2.04545 9.09091 4.54545V36.3636C9.09091 38.8636 11.1364 40.9091 13.6364 40.9091H45.4545C47.9545 40.9091 50 38.8636 50 36.3636V4.54545C50 2.04545 47.9545 0 45.4545 0ZM45.4545 36.3636H13.6364V4.54545H45.4545V36.3636ZM36.3636 27.2727H27.2727V22.7273H31.8182C34.3182 22.7273 36.3636 20.7045 36.3636 18.1818V13.6364C36.3636 11.1136 34.3182 9.09091 31.8182 9.09091H22.7273V13.6364H31.8182V18.1818H27.2727C24.7727 18.1818 22.7273 20.2045 22.7273 22.7273V31.8182H36.3636V27.2727Z" fill="currentColor"/>
	</svg>`,
	`<svg class="w-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M45.4545 0H13.6364C11.1364 0 9.09091 2.04545 9.09091 4.54545V36.3636C9.09091 38.8636 11.1364 40.9091 13.6364 40.9091H45.4545C47.9545 40.9091 50 38.8636 50 36.3636V4.54545C50 2.04545 47.9545 0 45.4545 0ZM45.4545 36.3636H13.6364V4.54545H45.4545V36.3636ZM4.54545 9.09091H0V45.4545C0 47.9545 2.04545 50 4.54545 50H40.9091V45.4545H4.54545V9.09091ZM36.3636 27.2727V23.8636C36.3636 21.9773 34.8409 20.4545 32.9545 20.4545C34.8409 20.4545 36.3636 18.9318 36.3636 17.0455V13.6364C36.3636 11.1136 34.3182 9.09091 31.8182 9.09091H22.7273V13.6364H31.8182V18.1818H27.2727V22.7273H31.8182V27.2727H22.7273V31.8182H31.8182C34.3182 31.8182 36.3636 29.7955 36.3636 27.2727Z" fill="currentColor"/>
	</svg>`,
	`<svg class="w-full" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M4.54545 9.09091H0V45.4545C0 47.9545 2.04545 50 4.54545 50H40.9091V45.4545H4.54545V9.09091ZM31.8182 31.8182H36.3636V9.09091H31.8182V18.1818H27.2727V9.09091H22.7273V22.7273H31.8182V31.8182ZM45.4545 0H13.6364C11.1364 0 9.09091 2.04545 9.09091 4.54545V36.3636C9.09091 38.8636 11.1364 40.9091 13.6364 40.9091H45.4545C47.9545 40.9091 50 38.8636 50 36.3636V4.54545C50 2.04545 47.9545 0 45.4545 0ZM45.4545 36.3636H13.6364V4.54545H45.4545V36.3636Z" fill="currentColor"/>
	</svg>`,
]

setCurrentOffice(officeId)
</script>
