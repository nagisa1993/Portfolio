<template>
	<div v-show="isActiveTab(tabname)">
		<div class="gallery__project" v-for="proj in projs">
      <!-- <router-link :to="proj.route"> -->
      		<img :src="proj.thumbnail" v-on:click="show(proj)"/><span class="name">{{proj.name}}</span>
      <!-- </router-link> -->
    	</div>
    	<modal v-if="showModal" @close="showModal = false" :detail="detail"></modal>
	</div>
</template>

<script>
import Modal from './Modal'
	export default {
		name: 'gallery',
		props: ['tabname', 'projs'],
		components: {Modal},
		data() {
			return {
				showModal: false,
				detail: {}
			}
		},
		methods: {
		    isActiveTab: function(val) {
		      	return this.tabname === val;
		    },
		    show: function(val) {
		    	this.detail = val.detail;
		    	this.showModal = true;
		    }     
		}
		
}
</script>

<style lang="scss" scoped>
@import '../components/stylesheets/_gallery.scss';
</style>