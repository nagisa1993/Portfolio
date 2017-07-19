<template>
  <div class="experience" id="experience">
    <h2>What I have done?</h2>
    <p>Some projects I've done so far. Click to see more!</p>
  	<tab :tabtype="tabtype" :tabs="tabs"></tab>
  </div>
</template>

<script>
  import Tab from '../layouts/Tabs'
  import Img1 from '../assets/VITPLA_web.png'

  export default {
    name: 'exp',
    components: {Tab},
    data () {
      return {
        tabtype: 'exp',
        tabs: [{tabname: 'Web', tabcontent: [
                    {route: '/vitpla',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/VITPLA_web_thumbnail.png',
                      intro: 'Cooperated with doctors of Children’s National Medical Center and Rutgers ECE department PhD student. This web app can provides a medical treatment recommendation from established massive dataset.',
                      src1: Img1,
                    role: 'I mocked up website architecture in details closely with team; created and troubleshooted professional, flat and single-paged web UI and provided data process visualization using Bootstrap and d3.js; developed front-end service logic flow using jQuery; successfully developed and packed a unique and reusable JavaScript library based on d3.js using Webpack, providing a timeline with draggable visualization window and updated data visualization, improving our team\'s working efficiency by at leat 90%.',
                    learn: 'Learnt about how to pack a JavaScript library using Webpack to make codes cleaner, neater and reusable, which is a web developer\'s basic ability. The most important thing I learnt is, I developed strong teamspirit and strengthen my communication ability as well as coding capability. What\'s more, by joinging this project, I saw the power of d3.js and knew how to take control of it.',
                time: '10/2016-05/2017',
                keywords: ['d3.js', 'Bootstrap', 'jQuery', 'Git', 'Webpack'],
                      name: 'VITPLA'}, 
                    {route: '/crowdpp_web',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_web_thumbnail.png',
                      name: 'Crowd++'},
                    {route: '/trafficmonitoring',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/TrafficMonitoring_web_thumbnail.jpeg',
                      name: 'New Jersey Traffic Monitoring & Analysis System'},
                    {route: '/stockprediction',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/StockPrediction_thumbnail.png',
                      name: 'Stock Prediction System'}
                    ]},
            {tabname: 'Android', tabcontent: [
                    {route: '/crowdpp_android',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/Crowdpp_android_thumbnail.png',
                      name: 'Crowd++'},
                    {route: '/rupacer',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/rupacer_thumbnail.png',
                      name: 'RUPacer'},
                    {route: '/snapshot',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/Camera_thumbnail.png',
                      name: 'Snapshot Camera'},
                    {route: '/heatmap',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/heatmap_android_thumbnail.png',
                      name: 'Daily Route Interactive Heatmap'},                    
                    {route: '/bluelamp',
                      thumbnail: '//s3-us-west-1.amazonaws.com/nagisaimage/bluelamp_thumbnail.png',
                      name: 'Blue Lamp Bluetooth-connected Android Alarm'}
                    ]}]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import './stylesheets/_experience.scss';
</style>