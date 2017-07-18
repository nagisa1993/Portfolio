<template>
	<div class="skill">
		<tab :tabtype="tabtype" :tabs="tabs" class="skill__tab"></tab>
		<div class="skill__table">
			<div class="high">High Familarity</div>
			<div class="mid">Median Familarity</div>
			<div class="low">Low Familarity</div>
		</div>
	</div>
</template>

<script>
	import Tab from '../layouts/Tabs'
	export default {
		name: 'skills',
		components: {Tab},
		data() {
			return {
				tabtype: 'skill',
				tabs: [{tabname: 'lang', tabcontent: [
										{familarity: 'high', name: 'Java'}, 
										{familarity: 'high', name: 'JavaScript'},
										{familarity: 'mid', name: 'C++'},
										{familarity: 'mid', name: 'PHP'}
										]},
						{tabname: 'tools', tabcontent: [
										{familarity: 'high', name: 'Git'},
										{familarity: 'high', name: 'Chrome DevTools'},
										{familarity: 'high', name: 'Android Studio'},
										{familarity: 'mid', name: 'AWS(EC2, S3)'},
										{familarity: 'high', name: 'NPM'},
										{familarity: 'mid', name: 'Tomcat'},
										{familarity: 'mid', name: 'Eclipse'},
										{familarity: 'high', name: 'Postman'}
										]},
						{tabname: 'OS', tabcontent: [
										{familarity: 'mid', name: 'Linux'}, 
										{familarity: 'high', name: 'Windows'},
										{familarity: 'high', name: 'Android'}
										]},
						{tabname: 'frontend', tabcontent: [
										{familarity: 'high', name: 'HTML'}, 
										{familarity: 'high', name: 'CSS/Sass'},
										{familarity: 'high', name: 'jQuery'},
										{familarity: 'high', name: 'Bootstrap'},
										{familarity: 'mid', name: 'AngularJS'},
										{familarity: 'high', name: 'Vue.js'},
										{familarity: 'mid', name: 'Webpack'}
										]},
						{tabname: 'backend', tabcontent: [
										{familarity: 'high', name: 'RESTful API'}, 
										{familarity: 'low', name: 'Node.js'},
										{familarity: 'mid', name: 'Express'},
										{familarity: 'mid', name: 'MySQL'},
										{familarity: 'high', name: 'NoSQL(MongoDB)'}
										]}]
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '/stylesheets/_skill.scss'
</style>