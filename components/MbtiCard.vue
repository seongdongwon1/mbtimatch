<template>
  <div :class="['mbti-item', `item${idx}`]">
    <div
      class="card-inner"
      :class="{ flipped: isFlipped }"
      @click="flipCard()"
    >
      <div class="card-front">
        <span>{{ card[idx].front }}</span>
      </div>
      <div class="card-back">
        <span>{{ card[idx].back }}</span>
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
            isFlipped: false,
            card: [
                {
                    front: 'I',
                    back: 'E'
                },
                {
                    front: 'N',
                    back: 'S'
                },
                {
                    front: 'F',
                    back: 'T'
                },
                {
                    front: 'P',
                    back: 'J'
                }
            ]
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
