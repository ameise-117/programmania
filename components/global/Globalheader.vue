<template lang="pug">
  header.globalheader
    a.logo(href="/")
      img.img(src="~/assets/images/header/logo.png")
      p.title
        span.sub プログラミング的思考力
        span.text 育成道場
    .instruction(v-if="isShowTutorial", @click="openModal")
      img.icon(src="~/assets/images/header/icon_book.svg")
      p.text 使い方
    transition(name="modal")
      tutorial(v-show="isShowModal", v-on:close-modal="closeModal")
</template>

<script>
import Tutorial from '~/components/partial/modal/Tutorial.vue'

export default {
  components: {
    Tutorial
  },
  props: ['isShowTutorial'],
  data() {
    return {
      isShowModal: false
    }
  },
  methods: {
    openModal() {
      this.isShowModal = true
    },
    closeModal() {
      this.isShowModal = false
    }
  }
}
</script>

<style scoped>
.globalheader {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  background-color: var(--color-key-2);
  color: var(--color-text-2);
  box-shadow: 3px 3px 10px rgba(49,100,160,.1), -3px 0 10px rgba(49,100,160,.1);

  @media (--medium) {
    padding: 0 10px 0 15px;
  }

  &::before {
    content: "";
    position: absolute;
    width: 200px;
    height: 100%;
    right: 70px;
    top: 0;
    background-image: url("../../assets/images/header/gear.png");
    background-size: contain;
    z-index: -1;
  }
}

.logo {
  display: flex;
  align-items: flex-end;

  & .img {
    width: 35px;
    height: auto;
    margin-bottom: 2px;
  }

  & .title {
    margin-left: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.2;
    font-family: var(--font-hiragino-gothic);
    
    & .sub {
      font-size: 10px;
    }

    & .text {
      font-size: 24px;
      letter-spacing: .17em;
      font-weight: bold;
    }
  }
}

.instruction {
  display: flex;
  cursor: pointer;
  transition: var(--transition-link);

  &:hover {
    opacity: var(--opacity);
  }

  & .text {
    margin-left: 5px;
    word-break: keep-all;
  }
}
</style>
