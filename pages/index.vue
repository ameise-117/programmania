<template lang="pug">
  div
    globalheader
    main.main
      mainpalet
    globalfooter
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Mainpalet from '~/components/section/Mainpalet.vue'
import Globalfooter from '~/components/global/Globalfooter.vue'

export default {
  components: {
    Globalheader,
    Mainpalet,
    Globalfooter
  }
}
</script>
