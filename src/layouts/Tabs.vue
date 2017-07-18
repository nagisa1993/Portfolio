<template>
	<div class="content">
		<div class="content__menu">
			<button v-for="tab in tabs" v-on:click="makeActive(tab.tabname)">{{tab.tabname}}</button>
		</div>
		
      	<skill-list v-if="type === 'skill'" :tabname="choice" :skills="items"></skill-list>
      	<gallery v-if="type === 'exp'" :tabname="choice" :projs="items"></gallery>
	</div>
</template>

<script>
import SkillList from './Lists'
import Gallery from './Gallery'

export default {
	props: ['tabtype', 'tabs'], 
	components: {SkillList, Gallery},
	data() {
		return {
			type: this.tabtype,
	      	choice: this.tabs[0].tabname, // Home is chosen by default
	        items: this.tabs[0].tabcontent
      	} 
	},
	methods: {
      	makeActive: function(val) {
	      	console.log(val);
	        this.choice = val;
	        if (val === 'Web' || val === 'Languages')
        		this.items = this.tabs[0].tabcontent;
        	else if (val === 'Android' || val === 'Tools')
        		this.items = this.tabs[1].tabcontent;
        	else if (val === 'OS')
        		this.items = this.tabs[2].tabcontent;
        	else if (val === 'Frontend')
        		this.items = this.tabs[3].tabcontent;
        	else if (val === 'Backend')
        		this.items = this.tabs[4].tabcontent;
      	}
    }
}
</script>

<style lang="scss" scoped>
@import '../components/stylesheets/_colors.scss';
@import '../components/stylesheets/_button.scss';

.content {
	&__menu {
		button {
			@include btn_style;
			transition: transform 0.5s ease-out;
			&:hover {
				transform: scale(1.1);
				background-color: $mainColor;
				color: white;
			}
		}
	}
}

.active {
	background-color: $mainColor;
}
</style>