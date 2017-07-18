<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/VITPLA_web.png'
	export default {
		name: 'vitpla',
		components: {Project},
		data() {
			return {
				temp: {intro: 'Cooperated with doctors of Children’s National Medical Center and Rutgers ECE department PhD student. This web app can provides a medical treatment recommendation from established massive dataset.',
				src1: Img,
                role: 'I mocked up website architecture in details closely with team; created and troubleshooted professional, flat and single-paged web UI and provided data process visualization using Bootstrap and d3.js; developed front-end service logic flow using jQuery; successfully developed and packed a unique and reusable JavaScript library based on d3.js using Webpack, providing a timeline with draggable visualization window and updated data visualization, improving our team\'s working efficiency by at leat 90%.',
                learn: 'Learnt about how to pack a JavaScript library using Webpack to make codes cleaner, neater and reusable, which is a web developer\'s basic ability. The most important thing I learnt is, I developed strong teamspirit and strengthen my communication ability as well as coding capability. What\'s more, by joinging this project, I saw the power of d3.js and knew how to take control of it.',
                title: 'VITPLA',
                time: '10/2016-05/2017',
                keywords: ['d3.js', 'Bootstrap', 'jQuery', 'Git', 'Webpack']
            	}
			}
		}
	}
</script>
