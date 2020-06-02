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
  }
}
</script>
