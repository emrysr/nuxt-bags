<script setup lang="ts">
import Grid from "vue-virtual-scroll-grid";
import ProductCard from "./ProductCard.vue";
const VISIBLE_ROWS = 3;
const pageProvider = (pageNumber: number, pageSize: number) => {
    return new Promise((resolve) => {
        const start = pageNumber * pageSize;
        const stop = start + pageSize;
        const items = results.value.slice(start, stop);
        resolve(items);
    });
};
const getKey = (item: InternalItem) => item.value.id;

const store = useProductsStore();
const { products } = store;

const results = ref([...products]);
</script>
<template>
    <Grid
        :length="results.length"
        :page-size="columns * VISIBLE_ROWS"
        :page-provider="pageProvider"
        :get-key="getKey"
        class="grid"
    >
        <ProductCard></ProductCard>
    </Grid>
</template>
