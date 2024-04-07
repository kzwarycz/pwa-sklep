<script setup>
const mobileMenu = ref(false);
const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};
</script>
<template>
 <nav class="centered hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
  <a
    href="/list"
    class="text-muted-foreground transition-colors hover:text-foreground"
  >
    Produkty
  </a>
  <a
    href="/contact"
    class="text-muted-foreground transition-colors hover:text-foreground"
  >
    Kontakt
  </a>
  <a
    href="/login"
    class="text-muted-foreground transition-colors hover:text-foreground"
  >
    Zaloguj się
  </a>
</nav>
</template>

<style scoped lang="scss">
.centered {
  display: flex;
  justify-content: center;
  padding-top: 20px; // adjust this value as needed
}
</style>
