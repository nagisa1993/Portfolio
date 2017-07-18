<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/Camera.png'
	export default {
		name: 'snapshotcamera',
		components: {Project},
		data() {
			return {
			temp: {intro: '(Screenshots not available) A coursework app that can take photos or take a 10s-long video when user picks up the phone and take a shot when video finishes recording. Besides, the videos and photos will be stored in phone storage and there will be GPS information recorded for photos.',
			src1: Img,
            role: 'Developed the whole app and implemented sensor manager and Android camera to let the app respond (take videos and photos) to users’ motion whenever users pick up their phone. Analyzed accelerator value difference between \'sudden pick up\' (including vigorouly shaking phone or suddenly picking up phone from table) and \'daily pick up\' (like reading message or answering phone).',
            learn: 'I learnt about Android sensor\'s and camera\'s whole lifecycle and process. This makes me become more familar with Android\'s lifecycle. In addition, fragment is a very important Android concept, it is in some degree allowing me to form a modularization development sense in the future.',
            title: 'Snapshot Camera',
         	time: '11/2015-11/2015',
            keywords: ['Android', 'Sensor']}
			}
		}
	}
</script>
