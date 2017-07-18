<template>
  <div class="experience" id="experience">
    <h2>What I have done?</h2>
    <p>Some projects I've done so far. Click to see more!</p>
  	<tab :tabtype="tabtype" :tabs="tabs"></tab>
  </div>
</template>

<script>
  import Tab from '../layouts/Tabs'
  import Img1 from '../../src/assets/VITPLA_web_thumbnail.png'
  import Img2 from '../../src/assets/Crowdpp_web_thumbnail.png'
  import Img3 from '../../src/assets/TrafficMonitoring_web_thumbnail.jpeg'
  import Img4 from '../../src/assets/StockPrediction_thumbnail.png'
  import Img5 from '../../src/assets/Crowdpp_android_thumbnail.png'
  import Img6 from '../../src/assets/rupacer_thumbnail.png'
  import Img7 from '../../src/assets/Camera_thumbnail.png'
  import Img8 from '../../src/assets/heatmap_android_thumbnail.png'
  import Img9 from '../../src/assets/bluelamp_thumbnail.png'

  export default {
    name: 'exp',
    components: {Tab},
    data () {
      return {
        tabtype: 'exp',
        tabs: [{tabname: 'Web', tabcontent: [
                    {route: '/vitpla',
                      thumbnail: Img1,
                      name: 'VITPLA'}, 
                    {route: '/crowdpp_web',
                      thumbnail: Img2,
                      name: 'Crowd++'},
                    {route: '/trafficmonitoring',
                      thumbnail: Img3,
                      name: 'New Jersey Traffic Monitoring & Analysis System'},
                    {route: '/stockprediction',
                      thumbnail: Img4,
                      name: 'Stock Prediction System'}
                    ]},
            {tabname: 'Android', tabcontent: [
                    {route: '/crowdpp_android',
                      thumbnail: Img5,
                      name: 'Crowd++'},
                    {route: '/rupacer',
                      thumbnail: Img6,
                      name: 'RUPacer'},
                    {route: '/snapshot',
                      thumbnail: Img7,
                      name: 'Snapshot Camera'},
                    {route: '/heatmap',
                      thumbnail: Img8,
                      name: 'Daily Route Interactive Heatmap'},                    
                    {route: '/bluelamp',
                      thumbnail: Img9,
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