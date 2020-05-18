<template lang="pug">
  div
    globalheader
    main.main
      mainvisual
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Mainvisual from '~/components/section/Mainvisual.vue'

export default {
  components: {
    Globalheader,
    Mainvisual
  }
}
</script>
