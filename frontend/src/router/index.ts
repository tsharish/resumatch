import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
			children: [
				{
					path: '',
					name: 'jobDescription',
					component: () => import('@/components/JobDescription.vue')
				},
				{
					path: '/keyphrases',
					name: 'keyPhrases',
					component: () => import('@/components/KeyPhrases.vue')
				},
				{
					path: '/resumematch',
					name: 'resumeMatch',
					component: () => import('@/components/ResumeMatch.vue')
				}
			]
		},
		/* {
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		} */
	]
})

export default router
