<template>
	<div class="project">
		<button v-on:click="route">Back</button>
		<h2><a :href="temp.href" target="_blank">{{temp.title}}</a></h2>
		<p>{{temp.time}}</p>
		<div v-for="keyword in temp.keywords" class="keyword">{{keyword}}
		</div>
		<img :src="temp.src1">
		<p>{{temp.intro}}</p>
		<img :src="temp.src2">
		<hr><br>
		<p>{{temp.role}}</p>
		<p>{{temp.learn}}</p>
	</div>
</template>

<script>
	export default {
		name: 'project',
		props: ['temp'],
		created() {
			console.log(window.location.pathname);
		},
		methods: {
			route: function() {
      			this.$router.go(-1); 
    		}
		}
	}
</script>

<style lang="scss" scoped>
@import '../stylesheets/_button.scss';
@import '../stylesheets/_colors.scss';

.project {
	text-align: center;
	padding: 5em;
	h2 {
		margin-top: 3em;
		a {
			color: $mainColor;
		}
	}
	img {
		display: block;
		padding: 2em;
		width: 80%;
		height: auto;
		margin: auto;
	}
	button {
		@include btn_style;
		float: left;
	}
	.keyword {
		background-color: $mainColor;
		color: white;
		width: 7em;
		height: 1.5em;
		border-radius: 0.2em 0.2em;
		font-weight: 0.8em;
		margin: 1em;
		padding: 0.2em;
		display: inline-block;
		text-align: center;
	}
}
</style>