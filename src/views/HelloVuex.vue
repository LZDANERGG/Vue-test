<template>
<div class="hello">
<h2>HelloVuex</h2>
<h3>{{$store.state.counter}}</h3>
<div v-for="item in $store.state.star" :key="item.id">{{item}}</div>
<button @click="addaction">+</button>   |
<button @click="decaction">-</button>   |
<button @click="addfive(5)">+5</button>	|
<button @click="updateStar">修改信息</button>
</div>
</template>
<script>
export default {
	name: "HelloVuex",
	data () {
		return {
			
		};
	},
	methods: {
		addaction() {
			this.$store.commit('addcount')
		},
		decaction() {
			this.$store.commit('deccount')
		},
		addfive(count) {
			this.$store.commit({
				type: "addfives",
				count
			})
		},
		updateStar() {
			this.$store.commit('updateStar');
			// console.log(this.$store.state.star)
		}
	}
}

</script>
<style scoped>

.hello {
	text-align: left;
}

</style>