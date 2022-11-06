// export function getCurrentDay() {
// 	return +new Date().toISOString().slice(8, 10)
// }

export function getCurrentDate() {
	return getNextDate(0)
}

export function getNextDate(days = 1) {
	let day = +new Date().toISOString().slice(8, 10) + days
	
	if (day > 31) day = 31
	
	let strDay = day.toString()
	if (strDay.length < 2)
		strDay = '0' + strDay
	
	return '2022-12-' + strDay
}