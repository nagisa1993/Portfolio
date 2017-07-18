<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/Crowdpp_web_1.png'
	import Img2 from '../../assets/Crowdpp_web_2.png'
	export default {
		name: 'crowdppweb',
		components: {Project},
		data() {
			return {
			temp: {intro: 'This web app is a clean analysis tool for doctors and parents to let them know an autistic kid\'s daily routes, speaking counts and speaking percentage. Crowd++ is a series tool (including web and Android apps), aiming to provide better caring for autistic children and monitoring for parents by tracking children\'s daily routines in voice analyzation(including speak percentage & speaker count) and location collection. I cooperated with teachers from Psychology department of Rutgers University and WINLAB PhD student.',
			href: 'http://54.196.39.156/FrontEnd/index.html',
			src1: Img,
			src2: Img2,
            role: 'I created and tested AngularJS & Material-Design based website hosting on AWS; I Built the website to fetch different users from database, show selected user\'s activity dates in datapicker, display selected date\'s activity data, activity map and speaker analysis on, the page; wrote CRUD PHP codes for AWS service.',
            learn: 'In my opinion, understanding how to host a website on AWS and adapting to a Linux environment without IDE is of the most important. Luckily, with my hard work and help from PhD student, I pick it up quickly and smoothly.',
            title: 'Crowd++ Web',
         	time: '10/2016-01/2017',
            keywords: ['AWS', 'AngularJS', 'Material', 'PHP']}
			}
		}
	}
</script>
