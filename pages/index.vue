<template>
  <div class="match__container">
    <div class="contents">
      <div class="title">
        <span>MBTI</span>
        <span>궁합계산기</span>
      </div>
      <div class="person">
        <div
          :class="['solo', 'btn', {'on': pSwitch == 'solo'}]"
          @click="pSwitch = 'solo'; flipCard($event)"
        >
          <div class="img" />
        </div>
        <div
          :class="['people', 'btn', {'on': pSwitch == 'people'}]"
          @click="pSwitch = 'people'; flipCard($event)"
        >
          <div class="img" />
          <div class="img" />
        </div>
      </div>
      <div class="mbti">
        <div v-if="pSwitch == 'solo'" class="mbti-solo">
          <div class="txt">
            나의 성격유형을 알아보쟝!!..😂
          </div>
          <div class="mbti-select">
            <mbti-card
              v-for="(item, index) in 4"
              :key="index"
              :idx="index"
            />
            <!--            <div class="mbti-item item1">-->
            <!--              <div class="card-inner" @click="flipCard($event)">-->
            <!--                <div class="card-front">-->
            <!--                  I-->
            <!--                </div>-->
            <!--                <div class="card-back">-->
            <!--                  E-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <div class="mbti-item item2">-->
            <!--              <div class="card-inner" @click="flipCard($event)">-->
            <!--                <div class="card-front">-->
            <!--                  I-->
            <!--                </div>-->
            <!--                <div class="card-back">-->
            <!--                  E-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <div class="mbti-item item3">-->
            <!--              <div class="card-inner" @click="flipCard($event)">-->
            <!--                <div class="card-front">-->
            <!--                  I-->
            <!--                </div>-->
            <!--                <div class="card-back">-->
            <!--                  E-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <div class="mbti-item item4">-->
            <!--              <div class="card-inner" @click="flipCard($event)">-->
            <!--                <div class="card-front">-->
            <!--                  I-->
            <!--                </div>-->
            <!--                <div class="card-back">-->
            <!--                  E-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
        <div v-else class="mbti-people">
          커플임
        </div>
      </div>
      <div class="result" />
      <div class="test" />
    </div>
  </div>
</template>

<script>
import MbtiCard from '~/components/MbtiCard'

export default {
    name: 'IndexPage',
    components: { MbtiCard },
    data () {
        return {
            pSwitch: 'people'
        }
    },
    methods: {
        flipCard (event) {
            const cardInner = event.currentTarget.querySelector('.card-inner')
            if (!cardInner) { return }

            cardInner.style.transform = 'rotateX(180deg)'
            setTimeout(() => {
                const frontText = cardInner.querySelector('.card-front')
                const backText = cardInner.querySelector('.card-back')

                if (!frontText || !backText) { return }

                // Swap the text content
                const temp = frontText.textContent
                frontText.textContent = backText.textContent
                backText.textContent = temp

                cardInner.style.transform = 'rotateX(0deg)'
            }, 600)
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '~assets/css/intro.scss';
</style>
