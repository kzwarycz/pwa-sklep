<template>
  <head>
    <title>DALL·E 2 Clothing</title>
    <link rel="manifest" href="/manifest.json" />
  </head>
  <div>
    <TopNewsletterBar
      v-if="isNewsletterVisible"
      @close="isNewsletterVisible = false"
    >
      <template v-slot:content>
        Zapisz się do naszego newslettera, aby otrzymywać najnowsze promocje.
      </template>
    </TopNewsletterBar>

    <TopNav />
    <slot />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNewsletterVisible: true,
    };
  },
};
</script>
