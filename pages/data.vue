<script setup lang="ts">
import { useProductsStore } from "../stores/Products";
const store = useProductsStore();
store.fetchProducts();
</script>

<template>
    <main>
        <div class="prose prose-slate dark:prose-invert">
            <h1>Data Source</h1>
            <p>This is the extracted data from google sheets</p>
        </div>
        <UTable :rows="store.products_raw" />
    </main>
</template>
