<template lang="pug">
  header.globalheader
    .logo
</template>

<style scoped>
.globalheader {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 0 20px;

  @media (--medium) {
    padding: 0 10px 0 15px;
  }
}
</style>
