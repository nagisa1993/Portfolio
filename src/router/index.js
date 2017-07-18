import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import About from '@/components/About'
import Experience from '@/components/Experiences'
import Skill from '@/components/Skills'
import Contact from '@/components/Contact'
import Vitpla from '@/components/projs/Vitpla'
import CrowdppWeb from '@/components/projs/Crowdpp_web'
import TrafficMonitoring from '@/components/projs/TrafficMonitoring'
import StockPrediction from '@/components/projs/StockPrediction'
import CrowdppAndroid from '@/components/projs/Crowdpp_android'
import RUPacer from '@/components/projs/RUPacer'
import Snapshot from '@/components/projs/SnapShotCamera'
import Heatmap from '@/components/projs/Heatmap'
import Bluelamp from '@/components/projs/Bluelamp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hashbang: false,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
    	path: '/crowdpp_web',
      name: 'CrowdppWeb',
      component: CrowdppWeb
    },
    {
    	path: '/trafficmonitoring',
      name: 'TrafficMonitoring',
      component: TrafficMonitoring
    },
    {
      path: '/vitpla',
      name: 'Vitpla',
      component: Vitpla
    },
    {
    	path: '/stockprediction',
      name: 'StockPrediction',
      component: StockPrediction
    },
    {
      path: '/crowdpp_android',
      name: 'CrowdppAndroid',
      component: CrowdppAndroid
    },
    {
    	path: '/rupacer',
      name: 'RUPacer',
      component: RUPacer
    },
    {
      path: '/snapshot',
      name: 'Snapshot',
      component: Snapshot
    },
    {
      path: '/heatmap',
      name: 'Heatmap',
      component: Heatmap
    },
    {
      path: '/bluelamp',
      name: 'Bluelamp',
      component: Bluelamp
    }
  ]
})
