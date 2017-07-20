<template>
	<div class="about" id="about">
		<div class="about__intro--short">
			<h2>Who am I?</h2>
			<p>I'm a front-end-developer-to-be and software-engineer-to-be.</p>
		</div>
		
		<div class="about__intro--long">
			<p>I am a master student from Rutgers University, with a bachelor 
			degree in Communication Engineering from Jinan University (Guangzhou, China) 
			and over 6 years of academic coding experiences (first 3 years in hardware 
			programming and last 3+ years in software programming).<br><br>
			Yes, I'm new to this industry, especially comparing to those with over 10+ 
			years' experiences in this area. But I'm hard-working and I like different challenges.
			I'm proactive in learning new technologies by taking courses online or 
			consulting experienced people. I'm not afraid of giving different trials, I'm 
			especially in love with the sense of achievement.</p>
		</div>

		<div class="about__expertise">
			<h2>What I can do?</h2>
			<p>These are the services I can provide for you.</p>
			<div v-for="expertise in expertises" class="about__expertise__detail">
				<i :class="expertise.class" style="font-size: 2em;color: #cd486b;"></i>
				<h3>{{expertise.title}}</h3>
				<p>{{expertise.intro}}</p>
			</div>
		</div>

		<div class="about__skill" id="skill">
			<h2>What I am skilled in?</h2>
			<tab :tabtype="tabtype" :tabs="tabs" class="about__skill__tab"></tab>
			<div class="about__skill__table">
				<div class="high">High Familarity</div>
				<div class="mid">Median Familarity</div>
				<div class="low">Low Familarity</div>
			</div>
		</div>
	</div>
</template>

<script>
import Tab from '../layouts/Tabs'

	export default {
		name: 'about',
		components: {Tab},
		data() {
			return {
				expertises: [{class: 'fa fa-pencil-square-o', title: 'Website Design', intro: 'I discuss my creative ideas with team and merge our exchanged results into future structure and layout.'}, 
							{class: 'fa fa-code', title: 'Web Development', intro: 'I implement HTML, CSS, JavaScript and trendy frameworks to build responsive, neat and reusable website.'}, 
							{class: 'fa fa-android', title: 'Android', intro: 'While I really enjoy making website, I can also develop high-quality Android app using Android Studio.'}],
				tabtype: 'skill',
				tabs: [{tabname: 'Languages', tabcontent: [
										{familarity: 'high', name: 'Java'}, 
										{familarity: 'high', name: 'JavaScript'},
										{familarity: 'mid', name: 'C++'},
										{familarity: 'mid', name: 'PHP'}
										]},
						{tabname: 'Tools', tabcontent: [
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
						{tabname: 'Frontend', tabcontent: [
										{familarity: 'high', name: 'HTML'}, 
										{familarity: 'high', name: 'CSS/Sass'},
										{familarity: 'high', name: 'jQuery'},
										{familarity: 'high', name: 'Bootstrap'},
										{familarity: 'mid', name: 'AngularJS'},
										{familarity: 'high', name: 'Vue.js'},
										{familarity: 'mid', name: 'Webpack'}
										]},
						{tabname: 'Backend', tabcontent: [
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
@import '/stylesheets/_about.scss'
</style>