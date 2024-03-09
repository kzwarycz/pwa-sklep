<script setup></script>
<template>
  <div class="info">
    <slot name="content">Newsletter info</slot>
  </div>
  <TopNewsletterDrawer />
</template>
<style scoped lang="scss">
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #000;
  color: #fff;
  span {
    margin-right: 10px;
  }
}
</style>
