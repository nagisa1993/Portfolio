<template>
	<div v-show="isActiveTab(tabname)">
		<div class="gallery__project" v-for="proj in projs">
      <a :href="proj.route"><img :src="proj.thumbnail"/><span class="name">{{proj.name}}</span></a>
    </div>
	</div>
	
</template>

<script>
	export default {
		name: 'gallery',
		props: ['tabname', 'projs'],
		methods: {
		    isActiveTab: function(val) {
		      	return this.tabname === val;
		    },
		    getPic: function(name) {
			    return '../assets/' + name;
			}
		}
}
</script>

<style lang="scss" scoped>
@import '../components/stylesheets/_gallery.scss'
</style>