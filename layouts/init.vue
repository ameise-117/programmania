<template lang="pug">
  div
    globalheader
    main.main
      navigation
      mainvisual
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Navigation from '~/components/section/Navigation.vue'
import Mainvisual from '~/components/section/Mainvisual.vue'

export default {
  components: {
    Globalheader,
    Navigation,
    Mainvisual
  }
}
</script>
