<template>
  <div :class="['mbti-item', `item${idx}`]">
    <div
      class="card-inner"
      :class="{ flipped: isFlipped }"
      @click="flipCard"
    >
      <div class="card-front">
        I
      </div>
      <div class="card-back">
        E
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MbtiCard',
    props: ['idx'],
    data () {
        return {
            isFlipped: false
        }
    },
    methods: {
        flipCard () {
            this.isFlipped = !this.isFlipped
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~assets/css/intro.scss';
</style>
