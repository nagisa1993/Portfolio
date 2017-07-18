<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/Crowdpp_android_2.png'
	import Img2 from '../../assets/Crowdpp_android.jpg'
	export default {
		name: 'crowdppandroid',
		components: {Project},
		data() {
			return {
			temp: {intro: 'This is a new version of Crowd++ app called Activity Logger. These serial apps of Crowdpp are aimed at autistic children, providing better caring and monitoring for their daily life when parents and doctors are not with them. By collecting children\'s speak percentage in conversations, their locations and their activities (including their motions, call and msg on the phone), parents and doctors can in a variety of degrees know whether their children are active indeed.',
			src1: Img,
			src2: Img2,
			href: 'https://github.com/nagisa1993/Crowdpp2',
            role: 'Add activity recognition by applying Google Activity Recognition API; store activity data into Android phone storage and upload files onto AWS server according to user\'s customized uploading period and interval. Rescheduled background task and maintained a unuploaded files queue when Internet is unenabled. Implement msg/call log service. Write custom time preference for Android Preference Compat. Design user-friendly Android Material-Design UI.',
            learn: 'This is a very systematical Android app I developed so far including UI, user experiences, data collection and cloud service. I understood how to created a asynchronous task and I am able to reschedule one task in the future when its dependency like network is unable; it is important because in actual case, many situations needed to take into consideration; pre-consideration can help one avoid many unnecessary problems. Additionally, flattening UI is so attractive to me, I developed this Activity Logger\'s UI following Material Design rules, which made great effect.',
            title: 'Crowd++ Android (Activity Logger)',
         	time: '03/2017-05/2017',
            keywords: ['Android', 'AWS', 'Google API']}
			}
		}
	}
</script>
