<script setup lang="ts">
import { useProductsStore } from "../stores/Products";
const store = useProductsStore();
const { products } = store;
store.fetchProducts();
</script>

<template>
    <main>
        <p v-if="products">Found {{ products.length }}</p>
        <div class="prose prose-slate dark:prose-invert">
            <ContentDoc />
        </div>
    </main>
</template>
