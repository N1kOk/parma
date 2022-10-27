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
					<input class="w-[250px] h-max my-auto text-2xl font-bold placeholder-gray-50 outline-none"
					       id="search" type="text" placeholder="Поиск сотрудника" autocomplete="off">
				</div>
			</div>

			<div class="flex justify-between items-end">
				<div class="w-[75px] p-4 flex flex-col space-y-4 text-center bg-gray-50">
					<div class="font-bold">Этаж</div>
					<div class="cursor-pointer select-none" v-for="i in 4">
						<img class="w-full pointer-events-none" :src="`/images/floors/${i}.svg`" alt="floor">
					</div>
				</div>

				<div class="w-[70%] px-16 py-8 bg-gray-50">
					<div class="w-[550px] mx-auto flex flex-wrap gap-[50px]">
						<div class="w-[150px] h-[150px] flex flex-wrap bg-white" v-for="i in 5">
							<div class="w-[20%] h-[20%] m-[15%] bg-black" v-for="i in 4"></div>
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

const officeId = +useRoute().params.officeId

setCurrentOffice(officeId)
</script>
