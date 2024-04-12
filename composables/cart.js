import { ref } from 'vue';

const cartItems = ref([]);

export function useCart() {
    const addToCart = (product) => {
        const existingItem = cartItems.value.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.value.push({ ...product, quantity: 1 });
        }
    };

    const removeFromCart = (index) => {
        cartItems.value.splice(index, 1);
    };

    const incrementQuantity = (index) => {
        cartItems.value[index].quantity++;
    };

    const decrementQuantity = (index) => {
        if (cartItems.value[index].quantity > 1) {
            cartItems.value[index].quantity--;
        }
    };

    const getCartItems = () => {
        return cartItems.value;
    };

    return {
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        getCartItems,
    };
}