<template>
  <div class="product-list">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-item"
    >
    <nuxt-link :to="`/products/${product.id}`"> <img
          :src="`/img/${product.imageFileName}`"
          :alt="product.productName"
          class="product-image"
        />
      </nuxt-link>
      <div class="product-details">
        <h3>{{ product.productName }}</h3>
        <div class="product-rating">
          <span
            v-for="star in 5"
            :key="star"
            class="star"
            :class="{ filled: star <= product.rating }"
            >&#9733;</span
          >
        </div>
      </div>
      <div class="product-action">
        <div class="product-price">{{ product.price }}</div>
        <button class="add-to-cart">Dodaj do koszyka</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useProductList } from '~/composables/productList';
const products = useProductList();

export default {
  data() {
    return {
      products: products,
    };
  },
};
</script>

<style>
.product-list {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-bottom: 90px;
  margin-top: 60px;
}

.product-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 15px;
  transition: box-shadow 0.3s ease;
}

.product-item:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 4px;
}

.product-details {
  flex-grow: 1;
}

.product-action {
  display: flex;
  align-items: center;
}

.add-to-cart {
  margin-right: 10px;
  background-color: hsl(var(--primary));
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.add-to-cart:hover {
  background-color: #0056b3;
}

.product-price {
  font-weight: bold;
  margin-right: 20px;
}

.star {
  color: grey;
}

.star.filled {
  color: gold;
}
</style>
