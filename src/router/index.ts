import { createRouter, createWebHashHistory } from 'vue-router'
import { nextTick } from 'vue'
import { auth } from '@/utils/auth'

import 'vue-router'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		requiresAuth?: boolean
	}
}

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: () => import('../views/IndexView.vue'),
			meta: {
				title: 'Выбор города',
			},
		},
		{
			path: '/office/:officeId',
			component: () => import('../views/OfficeView.vue'),
			meta: {
				title: 'Выбор помещения',
			},
		},
		{
			path: '/login',
			component: () => import('../views/LoginView.vue'),
			meta: {
				title: 'Авторизация',
			},
		},
		{
			path: '/reg',
			component: () => import('../views/RegView.vue'),
			meta: {
				title: 'Регистрация',
			},
		},
		{
			path: '/restore',
			component: () => import('../views/RestoreView.vue'),
			meta: {
				title: 'Восстановление пароля',
			},
		},
		{
			path: '/:pathMatch(.*)*',
			component: () => import('../views/404View.vue'),
			meta: {
				title: 'Страница не найдена',
			},
		},
	],
})

router.beforeEach((to, from) => {
	if (to.meta.requiresAuth && !auth.isLoggedIn) {
		return {
			path: '/login',
			query: { redirect: to.fullPath },
		}
	}
})

router.afterEach((to, from) => {
	nextTick(() => {
		document.title = to.meta.title + ' | PARMA Technologies Group' || 'PARMA Technologies Group'
	}).then()
})

export default router
