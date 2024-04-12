<template>
  <div class="product-card">
    <img :src="`/img/${product.imageFileName}`" alt="product.productName">
    <div class="product-details">
      <h1>{{ product.productName }}</h1>
      <p>{{ product.description }}</p>
      <div class="size-selection">
        <h2>Wybierz rozmiar</h2>
        <select name="size">
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
      <button>Dodaj do koszyka</button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { useProductList } from '~/composables/productList';
const products = useProductList();
const route = useRoute();
let id = parseInt(route.params.id[0]);
const product = products[id-1]
</script>


<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 90vw; /* Adjust width as needed */
  max-width: 1000px;
  margin: 0 auto; /* Center horizontally */
  background-color: #f5f5f5; /* Light background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  border-radius: 4px; /* Rounded corners */
  padding: 20px;
  padding-bottom: 100px;
  box-sizing: border-box; /* Ensures padding respects width */
}

.product-card img {
  width: 100%; /* Fill container width */
  object-fit: cover; /* Maintain aspect ratio and fill */
  border-radius: 4px; /* Match card corners */
  margin-bottom: 20px; /* Spacing */
}

.product-details {
  display: flex; /* Allow for vertical alignment */
  flex-direction: column;
  justify-content: space-between; /* Space elements evenly */
  /* Consider adding a border-top for separation */
}

h1 {
  font-size: 1.8em;
  margin-bottom: 10px;
  color: #333; /* Darker heading color */
}

p {
  font-size: 1em;
  line-height: 1.5;
  margin-bottom: 15px;
  color: #666; /* Subdued text color */
}

.size-selection {
  display: flex; /* Align label and select */
  align-items: center;
  margin-bottom: 10px;
}

.size-selection h2 {
  font-size: 1.2em;
  margin-right: 10px; /* Spacing between label and select */
  color: #333;
  line-height: 20px; /* Adjust line-height as needed */
}

select {
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit; /* Consistent font */
}

button {
  background-color: #007bff;
  color: white;
  padding: 12px 20px; /* Adjust padding if needed */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase; /* Add emphasis */
  font-weight: bold;
}

button:hover {
  background-color: #0062cc;
}

@media (min-width: 768px) {
  .product-card {
    width: 500px; /* Adjust width as desired */
  }
}

</style>
