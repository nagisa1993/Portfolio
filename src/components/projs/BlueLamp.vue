<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/bluelamp.png'
	import Img2 from '../../assets/bluelamp2.png'
	export default {
		name: 'bluelamp',
		components: {Project},
		data() {
			return {
			temp: {intro: 'This is my Bachelor\'s graduation project. It is inspired by a research published on Nature, that blue light can wake up people quickly. This app can connect to a blue light lamp (LED) via Bluetooth and let user set up an alarm; after which the lamp will light up 15 minites before the actual ring time to wake user\'s brains up before one actually is awake.',
			src1: Img,
			src2: Img2,
            role: 'For the hardware part, I programmed for the hardware codes using C and tested blutetooth communication on PC; for the software part, I developed Bluetooth communication and alarm modules, designed a neat UI and tested communication between app and lamp.',
            learn: 'This is my first Android app involved with both hardware programming and software programming. I realize how user experience matters in application development because before that, I never developed an app made for people, I only coded on machines or circuit boards. This experience drew my interests in developing application for people.',
            title: 'Bluetooth-connected Android Alarm',
         	time: '01/2015-04/2015',
            keywords: ['Android', 'Alarm manager', 'Bluetooth']}
			}
		}
	}
</script>
