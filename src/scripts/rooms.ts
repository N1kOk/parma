import { ref } from 'vue'

export const rooms = ref([
	[
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null],
		[null, null, null, null],
		[null, {
			firstName: 'Иван',
			lastName: 'Косарский',
			patronymic: 'Александрович',
			phone: '+7 922 300 30 08',
			mail: 'cos@gmail.com',
		}, null, null],
	],
	[
		[null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null],
		[null, null, null, null],
	],
	[
		[null, null],
		[null, null, null, null],
		[null, null],
		[null, null, null, null],
		[null],
	],
	[
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	],
])

export function createRoom(floor: number) {
	rooms.value[floor - 1].push([null, null, null, null])
}

export function removeRoom(floor: number, roomIndex: number) {
	delete rooms.value[floor - 1][roomIndex]
	
	rooms.value[floor - 1] = rooms.value[floor - 1].filter(value => value !== undefined)
}