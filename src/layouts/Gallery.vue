<template>
	<div v-show="isActiveTab(tabname)">
		<div class="gallery__project" v-for="proj in projs">
      <!-- <router-link :to="proj.route"> -->
      <img :src="proj.thumbnail"/><span class="name"><button @click="showModal = true"></button>{{proj.name}}</span>
      <!-- </router-link> -->
    	</div>
    	<!-- <div class="gallery__details" :style="{display: isShow}"><button v-on:click="show">Back</button>
    		<h2><a :href="href" target="_blank">{{title}}</a></h2>
			<p>{{time}}</p>
			<div v-for="keyword in keywords" class="keyword">{{keyword}}
			</div>
			<img :src="src1">
			<p>{{intro}}</p>
			<img :src="src2">
			<hr><br>
			<p>{{role}}</p>
			<p>{{learn}}</p>
    	</div> -->
    	<modal v-if="showModal" @close="showModal = false">
    <!--
      you can use custom content here to overwrite
      default content
    -->
    		<h3 slot="header">custom header</h3>
  		</modal>
	</div>
</template>

<script>
import Modal from './Modal.vue'
	export default {
		name: 'gallery',
		props: ['tabname', 'projs'],
		components: {Modal},
		data() {
			return {
				isShow: 'none',
				href: '',
				title: '',
				time: '',
				keywords: [],
				intro: '',
				src1: '',
				src2: '',
				role: '',
				learn: '',
				showModal: false
			}
		},
		methods: {
		    isActiveTab: function(val) {
		      	return this.tabname === val;
		    },
			show: function(val) {
				if (this.isShow === 'none'){
			        this.isShow = 'block';
			        this.href = val.href;
			        this.title = val.name;
			        this.time = val.time;
			        this.keywords = val.keywords;
			        this.intro = val.intro;
			        this.src1 = val.src1;
			        this.src2 = val.src2;
			        this.role = val.role;
			        this.learn = val.learn;
			      }
			        
			      else
			        this.isShow = 'none';
			}
		}
}
</script>

<style lang="scss" scoped>
@import '../components/stylesheets/_gallery.scss';
</style>