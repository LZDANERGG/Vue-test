import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		counter: 1000,
		star: {
			name:"C罗",
			sex:"男",
			age:35
		}
	},
	mutations: {
		//方法,这里不能进行异步操作
		addcount(state) {
			state.counter++
		},
		deccount(state) {
			state.counter--
		},
		addfives(state, payload) {
			state.counter += payload.count
		},
		updateStar(state){
			// state.star.name = ('卡卡');
			// console.log(state.star)
				state.star.name = ('卡卡');
				console.log(state.star)
		}
	},
	actions: {},
	modules: {},
	getters: {}
})