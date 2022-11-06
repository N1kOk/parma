import { ref } from 'vue'

// firstName: 'Иван',
// lastName: 'Косарский',
// patronymic: 'Александрович',
// phone: '+7 922 300 30 08',
// mail: 'cos@gmail.com',

type Floors = typeof defaultFloorsValue | UserInfo[][][]
type UserInfo = { [X in 'firstName' | 'lastName' | 'patronymic' | 'phone' | 'mail']: string }

const defaultFloorsValue = [
	[
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	],
	[
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	],
	[
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	],
	[
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
		[null, null, null, null],
	],
]


// TODO rename to schedule
// [date][floor - 1][roomIndex][placeIndex]
export const schedule: any = ref({})

setDefaultValue()

// export function getRooms(date: string, floor: number) {
// 	return getRoomsByFloor(getRoomsByDate(date), floor)
// }
//
// function getRoomsByDate(date: string) {
// 	if (!(<any>schedule.value)[date])
// 		(<any>schedule.value)[date] = defaultFloorsValue
// 	return (<any>schedule.value)[date] as Floors
// }
//
// function getRoomsByFloor(floors: Floors, floor: number) {
// 	return floors[floor - 1]
// }

export function createRoom(date: string, floor: number) {
	schedule.value[date][floor - 1].push([null, null, null, null])
}

export function removeRoom(date: string, floor: number, roomIndex: number) {
	delete schedule.value[date][floor - 1][roomIndex]
	
	schedule.value[date][floor - 1] = schedule.value[date][floor - 1].filter((value: unknown) => value !== undefined)
}

function setDefaultValue() {
	for (let i = 1; i < 32; i++)
		schedule.value[`2022-12-${i < 10 ? `0${i}` : i }`] = defaultFloorsValue
}