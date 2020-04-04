<template lang="pug">
  div
    globalheader
    main.main
      navigation
      div.main-block
        nuxt
        palet
      command-line
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Navigation from '~/components/section/Navigation.vue'
import CommandLine from '~/components/section/CommandLine.vue'
import Palet from '~/components/section/Palet.vue'

export default {
  components: {
    Globalheader,
    Navigation,
    CommandLine,
    Palet
  }
}
</script>
