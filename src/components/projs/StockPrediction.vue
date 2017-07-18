<template>
	<project :temp="temp"></project>
</template>

<script>
	import Project from './Project'
	import Img from '../../assets/StockPrediction.png'
	import Img2 from '../../assets/StockPrediction_2.png'

	export default {
		name: 'stockprediction',
		components: {Project},
		data() {
			return {
			temp: {intro: 'This is a simple course work webpage which displays long-term stock prediction and short-term stock prediction, utilizing Bayes curve fitting, ANN and SVM Algorithms and obtaining stock data by Yahoo!Finance API. I didn\'t have screenshots left so I put some paper prototyping here.',
			
            role: 'I created the website using HTML, CSS, JavaScript and HighChart and development services for back-end.',
            src1: Img,
            src2: Img2,
            href: 'https://github.com/nagisa1993/StockPrediction',
            learn: 'This is the first website I developed, I picked HTML, CSS and JavaScript up quickly. I got enchanted by the charm of front-end development; Since then, I quickly absorb different front-end knowledge and learnt by myself by taking online courses and coding practising.',
            title: 'Stock Prediction System',
         	time: '01/2016-03/2016',
            keywords: ['HTML', 'CSS', 'JavaScript']}
			}
		}
	}
</script>
