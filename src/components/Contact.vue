<template>
	<div class="contact" id="contact">
		<h2>Let's work together.</h2>
		<form class="contact__form" method="POST" action="http://formspree.io/mahaiyue2017@gmail.com">
		<input type="text" name="_gotcha" style="display:none" />
			<div>
				<label for="name">Name <i>*</i></label>
				<input type="text" name="name" placeholder="Your name" required>
			</div>
			<div>
				<label for="email">Email <i>*</i></label>
				<input name="email" type="email" placeholder="Your email"required>
			</div>
			<div>
				<label for="message">Message <i>*</i></label>
				<textarea rows="5" name="message" placeholder="Your message" required></textarea>
			</div>
			<button class="contact__form__button" type="submit">Let's get connected!</button>
		</form>
		<div class="contact__social">
		  <p>Find me on: </p>
	      <a href="https://www.linkedin.com/in/haiyuema/" target="_blank"><i class="fa fa-linkedin"></i></a>
	      <a href="https://github.com/nagisa1993" target="_blank"><i class="fa fa-github"></i></a>
	      <a href="https://www.instagram.com/1130_nagisa/?hl=en" target="_blank"><i class="fa fa-instagram"></i></a>
	      <a href="https://codepen.io/nagisa1130" target="_blank"><i class="fa fa-codepen"></i></a>
	      <a target="_blank"><i class="fa fa-file-pdf-o"></i></a>
	      <p style="font-size: 0.8em;">© 2017 by Haiyue Ma</p>
    	</div>
	</div>
</template>

<script>
	export default {
		name: 'contact',
		methods: {
			onSubmit: function() {
				alert("Thank you");
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '/stylesheets/_contact.scss'
</style>