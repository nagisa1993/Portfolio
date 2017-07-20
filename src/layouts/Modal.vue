<template> 
  <transition name="modal">
    <div class="modal__mask">
      <div class="modal__mask__wrapper">
        <div class="modal__container">
          <button @click="$emit('close')">Back</button>
          <div class="modal__container__header">
            <h2><a :href="detail.href" target="_blank">{{detail.name}}</a></h2>
          </div>

          <div class="modal__container__body">
            <p>{{detail.time}}</p>
            <div v-for="keyword in detail.keywords" class="keyword">{{keyword}}
            </div>
            <img :src="detail.src1">
            <p>{{detail.intro}}</p>
            <img :src="detail.src2">
            <br>
            <p>{{detail.role}}</p>
            <p>{{detail.learn}}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    props: ['detail']
  }
</script>

<style lang="scss" scoped>
@import '../components/stylesheets/_modal.scss';
</style>