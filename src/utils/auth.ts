import { ref } from 'vue'
import router from '@/router'

export const auth = {
	isLoggedInRef: ref(!!localStorage.getItem('user_key')),
	
	get isLoggedIn() { return !!this.key },
	
	get key() { return localStorage.getItem('user_key') || '' },
	set key(value: string) {
		localStorage.setItem('user_key', value)
		this.isLoggedInRef.value = this.isLoggedIn
	},
	
	login(skip = false) {
		if (skip)
			router.push(`/login?skip=1&redirect=${location.pathname + location.search}`).then()
		else
			router.push(`/login?redirect=${location.pathname + location.search}`).then()
	},
	
	logout() {
		this.key = ''
	},
}
