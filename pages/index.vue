<template>
  <div id="app">
    <section class="bg-gray-100 text-gray-700 body-font">
      <div
        class="hero-container container mx-auto flex px-5 py-24 items-center justify-center flex-col"
      >
        <img
          class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded hero-image"
          alt="ecommerce"
          src="/img/hero-image.webp"
        />
        <div class="text-center lg:w-2/3 w-full">
          <h1
            class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
          >
            Witaj w DALL·E 2 Clothing
          </h1>
          <p class="mb-8 leading-relaxed">
            Wykreuj swój własny styl przy użyciu AI. Nasze projekty łączą
            innowacyjność z modą, tworząc niepowtarzalny styl dla każdego.
          </p>
          <div class="flex justify-center">
            <NuxtLink
              to="/list"
              class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg goto-product"
            >
              Kup Teraz
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto products-container">
        <div class="flex flex-wrap -m-4 wide">
          <div
            class="lg:w-1/4 md:w-1/2 p-4 w-full product-card"
            v-for="product in products"
            :key="product.id"
          >
            <NuxtLink
              :to="`/list`"
              class="block relative h-48 rounded overflow-hidden high"
            >
              <img
                alt="produkt"
                class="object-cover object-center w-full h-full block"
                :src="product.image"
              />
            </NuxtLink>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
                {{ product.category }}
              </h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">
                {{ product.name }}
              </h2>
              <p class="mt-1">{{ product.price }} PLN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Garnitur męski",
          category: "Moda męska",
          price: 100,
          image: "/img/garnitur.webp",
        },
        {
          id: 2,
          name: "Strój sportowy",
          category: "Moda damska",
          price: 10,
          image: "/img/sport_outfit.webp",
        },
        {
          id: 3,
          name: "Sweter",
          category: "Moda damska",
          price: 50,
          image: "/img/sweter.webp",
        },
      ],
    };
  },
};
</script>

<style>
.hero-container {
  height: calc(100vh - 86px);
}

.hero-image {
  max-height: 70%;
  width: fit-content;
}

.goto-product {
  margin-right: 10px;
  background-color: hsl(var(--primary));
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.goto-product:hover {
  background-color: #0056b3;
}

.products-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin-bottom: 60px;
}

.products-container .p-4 {
  flex-grow: 1;
  flex-basis: calc(33.333% - 20px);
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .products-container .p-4 {
    flex-basis: calc(50% - 20px);
    max-width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .products-container .p-4 {
    flex-basis: 100%;
    max-width: 100%;
  }
}

.wide {
  width: 100%;
}

.high {
  height: auto;
}
</style>
