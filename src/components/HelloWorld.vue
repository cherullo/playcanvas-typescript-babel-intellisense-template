<template>
	<div class="hello">
		<p>Hello World: {{key}} : {{value}}</p>
	</div>
</template>

<script>
export default {
	data () {
		return {
			key: 'env'
		}
	},
	created () {
		alert('hello worsld');
	},
	computed: {
		value () {
			return process.env.NODE_ENV;
		}
	},
}
</script>
<style lang="scss" scoped>
	.hello {
		color:red;
		position:absolute;

		// i need to appear in front of playcanvas!
		z-index:999999;
	}
</style>