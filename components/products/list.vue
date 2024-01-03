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
    <div>
        <Grid
            :length="store.results.length"
            :page-size="columns * VISIBLE_ROWS"
            :page-provider="pageProvider"
            class="grid"
        >
            <template v-slot:probe>
                <ProductsCard></ProductsCard>
            </template>

            <!-- When the item is not loaded, a placeholder is rendered -->
            <template v-slot:placeholder="{ index, style }">
                <ProductsCard :style="style"></ProductsCard>
            </template>

            <!-- Render a loaded item -->
            <template v-slot:default="{ item, style, index }">
                <ProductsCard :product="item" :style="style"></ProductsCard>
            </template>
        </Grid>
    </div>
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
