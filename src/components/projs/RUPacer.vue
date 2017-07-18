<template>
	<div>
		<project :temp="temp"></project>
		<img src="../../assets/RUPacer_3.jpg">
	</div>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/RUPacer.png'
	import Img2 from '../../assets/RUPacer_2.png'
	export default {
		name: 'rupacer',
		components: {Project},
		data() {
			return {
			temp: {intro: 'This is an Android sensor-based social pedometer. It is an innovative-user-interface application which can count daily step, record total steps in last week, connect with Facebook account, detect location, show current local weather for a walk, present achievement, display leaderboard among Facebook friends, share a screenshot of current screen to Facebook timeline and settle daily walking goal.',
			src1: Img,
			src2: Img2,
			href: 'https://github.com/nagisa1993/RUPacer',
            role: 'This is a group course project, I designed user interface including palette choosing, menu expanding and component arragement. I implemented weather part on main page using data from forecast.io and downloading JSON information including temperature, humidity, precipitation rate, time zone and weather forecasting icon. I presented the final report to teachers and students.',
            learn: 'I formed strong team spirits in this project as our team members always sat around and decided how to improve our app. We conducted and tested our own parts and the best part was to see the merged result -- at that time, we didn\'t use Git, a useful and important tool proving to play a great role in developing in the future for me -- so the merging process was very painful but I took it as a trial for team-developing\'s first step.',
            title: 'RUPacer',
         	time: '12/2015-12/2015',
            keywords: ['Android', 'Facebook API', 'Sensor']}
			}
		}
	}
</script>

<style lang="scss" scoped>
	img {
		display: block;
		width: 40%;
		height: 40%;
		margin: auto;
		padding: 1em;
	} 
</style>
