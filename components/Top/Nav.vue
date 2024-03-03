<script setup>
const mobileMenu = ref(false);
const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};
</script>
<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <NuxtLink class="navbar-item" to="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </NuxtLink>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showMobileMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" :class="{ 'navbar-menu': !mobileMenu }">
      <div class="navbar-start">
        <NuxtLink to="/list" class="navbar-item"> Lista Produktów </NuxtLink>

        <NuxtLink to="/contact" class="navbar-item"> Kontakt </NuxtLink>

        <NuxtLink to="/product" class="navbar-item"> Produkt </NuxtLink>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light"> Log in </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
