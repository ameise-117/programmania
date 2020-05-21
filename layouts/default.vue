<template lang="pug">
  div
    globalheader
    main.main
      navigation
      nuxt
      command-line
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Navigation from '~/components/section/Navigation.vue'
import CommandLine from '~/components/section/CommandLine.vue'

export default {
  components: {
    Globalheader,
    Navigation,
    CommandLine
  }
}
</script>
