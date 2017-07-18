<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/heatmap_android_2.png'
	import Img2 from '../../assets/heatmap_android.png'
	export default {
		name: 'heatmap',
		components: {Project},
		data() {
			return {
			temp: {intro: 'An Android app which obtains GPS locations every 5 min to draw a color-gradient heatmap to clearly show that location data reveals one’s daily routine, habits and identity. User could check in and see real time location data to reveal how the app\'s location permissions could reveal information about user\'s daily life, utilizing Google Maps API, location service, SQLite and heatmap.',
			src1: Img,
			src2: Img2,
            role: 'Constructed Android SQLite to store different location data like checked-in place addresses and latitudes and longitudes along the way. Created realtime map with heatmap layout, check-in button and visited places\' name window. Insightful analyzed sequence and accuracy of the location fixes from GPS and network localization, comparing different results indoors and outdoors on delay and accuracy.',
            learn: 'I find Google Map\'s heatmap a very interesting and helpful tool to display data-intensive degree. By developing this app, I knew exactly how external API works, what permissions and methods we need to add with respect to different app functions and how to utilize Google Map Android Library.',
            title: 'Daily Route Interactive Heatmap',
         	time: '10/2015-10/2015',
            keywords: ['Android', 'heatmap', 'Googlemap', 'Location']}
			}
		}
	}
</script>
