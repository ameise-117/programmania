<template lang="pug">
  div
    globalheader(:isShowTutorial="true")
    main.main
      navigation
      .wrap
        nuxt
        command-line
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Navigation from '~/components/section/Navigation.vue'
import CommandLine from '~/components/section/CommandLineAdvance.vue'

export default {
  components: {
    Globalheader,
    Navigation,
    CommandLine
  },
  mounted() {
    // 画面幅を設定
    this.getWindowWidth()

    // タッチデバイス判定
    document.addEventListener('touchstart', this.detectDeviceType)
    document.addEventListener('mousemove', this.detectDeviceType)
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
    },
    detectDeviceType(event) {
      let deviceType = (event.changedTouches ? true : false)
      this.$store.dispatch('isTouchDevice', deviceType)
      document.removeEventListener('touchstart', this.detectDeviceType)
      document.removeEventListener('mousemove', this.detectDeviceType)
    }
  }
}
</script>
