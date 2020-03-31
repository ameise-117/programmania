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
import Navigation from '~/components/partial/Navigation.vue'
import CommandLine from '~/components/partial/CommandLine.vue'
import Palet from '~/components/partial/Palet.vue'

export default {
  components: {
    Globalheader,
    Navigation,
    CommandLine,
    Palet
  }
}
</script>
