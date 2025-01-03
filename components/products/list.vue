<script setup lang="ts">
import Grid from "vue-virtual-scroll-grid";
const store = useProductsStore();
const columns = ref(4);
const VISIBLE_ROWS = 3;
const pageProvider = (pageNumber: number, pageSize: any) => {
    const start = pageNumber * pageSize;
    const stop = start + pageSize;
    const items = store.results.slice(start, stop);
    return Promise.resolve(items);
};
</script>
<template>
    <!-- <div class="c-columns columns-1 sm:columns-2 lg:columns-3 2xl:columns-4">
        <UCard
            v-for="product in store.results"
            :key="product.name"
            :ui="{ base: 'min-h-80 is-break-inside-avoid' }"
        >

        </UCard>
    </div>

    <hr /> -->

    <Grid
        :length="store.results.length"
        :page-size="columns * VISIBLE_ROWS"
        :page-provider="pageProvider"
        class="grid"
        #default="{ item: product, style }"
    >
        <ProductsCard :product :style></ProductsCard>
    </Grid>
</template>

<style>
.grid {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 350px;
}
/* must match breakpoints */
@media (min-width: 394px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 431px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media (min-width: 641px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (min-width: 769px) {
    .grid {
        grid-template-columns: repeat(3, 1fr);
    }
}
@media (min-width: 992px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
@media (min-width: 1216px) {
    .grid {
        grid-template-columns: repeat(5, 1fr);
    }
}
@media (min-width: 1408px) {
    .grid {
        grid-template-columns: repeat(6, 1fr);
    }
}
</style>
