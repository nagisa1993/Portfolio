<template>
<div>
  <!-- <div class="app__menu"> -->
        <!-- <button v-on:click="route('Main')" class="app__menu__nav">Main</button> -->
        <!-- <a href="/" class="app__menu__nav">Main</a>
        <a href="#about" class="app__menu__nav">About</a>
        <a href="#skill" class="app__menu__nav">Skills</a>
        <a href="#experience" class="app__menu__nav">Experiences</a>
        <a href="#contact" class="app__menu__nav">Contact</a>
  </div> -->
    <div class="main">
      <div class="main__back">
    	<img class="main__me" src="//s3-us-west-1.amazonaws.com/nagisaimage/me.JPG">
      <p>Hi! I'm Haiyue Ma.</p>
    	<h2>Curiosity + Passion + Hardwork = Me!</h2>
      </div>
    	
      <about></about>
      <exp></exp>
      <contact></contact>
    </div>
  </div>
</template>

<script>
import Contact from './Contact'
import About from './About'
import Exp from './Experiences'

export default {
  name: 'main',
  components: {Contact, About, Exp}
}
</script>

<style lang="scss" scoped>
@import '/stylesheets/_main.scss';
</style>
