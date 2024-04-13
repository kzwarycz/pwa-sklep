<script setup>

const mobileMenu = ref(false);
const showMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

</script>

<template>
  <nav class="navbar">
    <NuxtLink to="/" class="logo-link">
      <img src="/img/logo.png" alt="Logo" class="logo-img" />
    </NuxtLink>
    <div class="nav-links">
      <NuxtLink to="/products" class="nav-item"> Produkty </NuxtLink>
      <NuxtLink to="/contact" class="nav-item"> Kontakt </NuxtLink>
      <NuxtLink to="/login" class="nav-item"> Zaloguj się </NuxtLink>
      <Cart/>    
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.logo-link {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.1); 
}

.logo-img {
  height: 60px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.nav-item {
  text-decoration: none;
  color: inherit;
  padding: 10px 0;
  text-align: center;
  transition: transform 0.3s ease;
}

.nav-item:hover {
  transform: scale(1.1); 
}
</style>
