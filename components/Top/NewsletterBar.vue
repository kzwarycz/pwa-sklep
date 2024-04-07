<script setup>
import { ref, onMounted } from "vue";

let showNewsletter = ref(false);

onMounted(() => {
  const storedState = localStorage.getItem("showNewsletter");
  if (storedState === null || storedState === "true") {
    showNewsletter.value = true;
  }
});

function closeComponent() {
  hideNewsletter();
}

function hideNewsletter() {
  showNewsletter.value = false;
  localStorage.setItem("showNewsletter", "false");
}
</script>

<template>
  <div class="info" v-if="showNewsletter">
    <slot name="content">Newsletter info</slot>
    <TopNewsletterDrawer @close="hideNewsletter" />
    <button class="close-btn" @click="closeComponent">
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
          fill="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.info {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  border: 1px solid #e0e0e0;
  height: 50px;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 18px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
}
</style>
