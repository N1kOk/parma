<template>
	<div class="w-full h-[1px] min-h-[calc(100vh-160px)] flex justify-between text-left">
		<div class="w-full h-full space-y-12">
			<div class="text-4xl font-bold">Офис {{ roomId }}, {{ placeId }} стол</div>
			<div class="w-full h-[calc(100%-112px)] p-8 bg-gray-50 space-y-4">
				<div class="text-2xl font-bold">Расписание</div>
				<div class="w-full h-[calc(100%-50px)] flex justify-between">
					<div class="w-max p-4 space-y-2 bg-white">
						<div class="flex justify-between text-2xl font-bold">
							<div>ДЕКАБРЬ</div>
							<div>2022</div>
						</div>
						<div class="w-[567px] flex flex-wrap text-[0.55rem] font-bold border box-content">
							<div class="w-[81px] text-center border" v-for="day in days">
								{{ day }}
							</div>
							<div class="w-[81px] h-[55px] p-1 flex border" v-for="i in 35">
								<div v-show="1 <= i - 3 && i - 3 <= 31">{{ i - 3 }}</div>
							</div>
						</div>
					</div>

					<div class="w-full h-full flex flex-col justify-center">
						<div class="flex-1 space-y-4">
							<div
								class="w-[300px] p-4 mx-auto bg-red text-white text-center text-2xl font-bold cursor-pointer">
								Снять бронь
							</div>
							<div class="text-sm text-center underline underline-offset-4">Отмена брони возможна лишь за
								24 часа!
							</div>
						</div>

						<div class="w-[350px] mx-auto space-y-2 text-center text-xl">
							<div class="px-4 border rounded-full bg-green cursor-pointer">Забронировать на завтра</div>
							<div class="px-4 border rounded-full bg-green cursor-pointer">Забронировать на ... дней
							</div>
							<div class="px-4 border rounded-full bg-green cursor-pointer">Забронировать на неделю</div>
							<div class="px-4 border rounded-full bg-white cursor-pointer">Забронировать на месяц</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'].map(value => value.toUpperCase())

const roomId = +useRoute().params.roomId
const placeId = +useRoute().params.placeId


</script>
