<template lang="pug">
  div
    globalheader
    main.main
      menulist
      nuxt
</template>

<script>
import Globalheader from '~/components/global/Globalheader.vue'
import Menulist from '~/components/partial/Menulist.vue'

export default {
  components: {
    Globalheader,
    Menulist
  }
}
</script>
