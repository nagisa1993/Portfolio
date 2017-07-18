<template>
	<div>
		<project :temp="temp"></project>
		<img src="../../assets/TrafficMonitoring_web_3.png">
		<img src="../../assets/TrafficMonitoring_web_4.png">
	</div>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/TrafficMonitoring_web_1.jpeg'
	import Img2 from '../../assets/TrafficMonitoring_web_2.png'
	import Img3 from '../../assets/TrafficMonitoring_web_3.png'
	import Img4 from '../../assets/TrafficMonitoring_web_4.png'

	export default {
		name: 'trafficmonitoring',
		components: {Project},
		data() {
			return {
				temp: {intro: 'This is a course project based on MEAN stack, providing for New Jersey\'s drivers to better analyze New Jersey’s traffic pattern according to historic traffic data & weather data retrieved from local website. This web app can provide a better driving route dispite heavy traffic for drivers according a specific time based on A* algorithm; show heavy traffic hotspots with filters like date, weather and severity; let users upload the traffic around them.',
				src1: Img,
				src2: Img2,
				href: 'https://github.com/nagisa1993/TrafficMonitoring',
                role: 'I designed responsive website UI and took website from sketch to reality. I developed backend service using Node.js and Express, constructed different database schemas with the utilization of Mongoose. I successfully developed in full-stack for \'Hotspot\', \'History\' and \'Upload\' page. \'Hotspot\' page clearly displays heavy traffic spots in marks and heatmap; \'History\' page can show users\' searching histories; \'Upload\' page can let users upload traffic information around them',
                learn: 'Leading a team is not an easy thing, our team developed following the process of Agile and using version control tool (Git). We coummunicated well between each others to find bugs, improve performance and exchange knowledge. Besides, learning popular stack like MEAN is a good experience for my future work in real industry.',
                title: 'New Jersey Traffic Monitoring & Analysis System',
             	time: '10/2016-12/2016',
             	keywords: ['MEAN-stack', 'full-stack', 'Git', 'Agile']}
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
