<script setup lang="ts">
const store = useProductsStore();
</script>
<template>
    <UInput v-model="store.filters.search" />
</template>
