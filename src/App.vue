<template>
  <div id="app" class="app"> 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
  // methods: {
  //   route: function(val) {
  //     this.$router.push({name: val}); 
  //     //this.$router.push(val); 
  //   }
  // }
}
</script>

<style lang="scss">
@import '/components/stylesheets/_style.scss';
</style>
