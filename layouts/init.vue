<template lang="pug">
  div
    globalheader(:isShowTutorial="false")
    nuxt
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'

export default {
  components: {
    Globalheader
  },
  mounted() {
    // 画面幅を設定
    this.getWindowWidth()
  },
  methods: {
    getWindowWidth() {
      if (window.innerWidth < 660) {
        this.$store.dispatch('windowWidth', 'mobile')
      } else if (window.innerWidth < 830) {
        this.$store.dispatch('windowWidth', 'tablet')
      } else {
        this.$store.dispatch('windowWidth', 'desktop')
      }
    }
  }
}
</script>
