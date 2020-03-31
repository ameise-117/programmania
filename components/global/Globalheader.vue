<template lang="pug">
  header.globalheader
    .logo LOGO
</template>

<style scoped>
.globalheader {
  position: fixed;
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
  background-color: var(--color-key-2);
  color: var(--color-text-2);
  box-shadow: 3px 3px 10px rgba(49,100,160,.1), -3px 0 10px rgba(49,100,160,.1);

  @media (--medium) {
    padding: 0 10px 0 15px;
  }
}
</style>
