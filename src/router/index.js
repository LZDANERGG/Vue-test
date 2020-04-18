import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lht from '../views/Lht.vue'
const AboutMe = () => import('../views/AboutMe') //懒加载方式
const User = () => import('../views/User')
const HelloVuex = () => import('../views/HelloVuex')
Vue.use(VueRouter)

const routes = [{
		path: '',
		redirect: 'home'
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: "首页"
		}
	},
	{
		path: '/lht',
		name: 'Lht',
		component: Lht,
		meta: {
			title: '我'
		}
	},
	{
		path: '/about',
		name: 'About',
		meta: {
			title: "关于"
		},
		children: [
			// {
			// 	path: '',
			// 	redirect: 'aboutme'
			// },
			{
				path: 'aboutnews',
				component: () => import('../views/AboutNews')
			},
			{
				path: 'aboutme',
				component: AboutMe
			}
		],

		//懒加载
		component: () => import('../views/About.vue')
	},
	{
		path: '/user',
		name: 'User',
		component: User,
		meta: {
			title: '用户'
		}
	},
	{
		path:'/hellovuex',
		component: HelloVuex,
		meta: {
			title: "Vuex"
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})


router.beforeEach((to, from, next) => {
	document.title = to.matched[0].meta.title
	next()
});

export default router