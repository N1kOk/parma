export function getCurrentDate() {
	return '2022-12-' + new Date().toISOString().slice(8, 10)
}