<script setup lang="ts">
const route = useRoute();
definePageMeta({
    title: "Product",
});
</script>
<template>
    <main>
        <h1 class="title">Detail Page</h1>
        <pre v-text="route.fullPath"></pre>
        <p>{{ route.meta.slug }}</p>
        <NuxtLink to="/" class="button">Back</NuxtLink>
    </main>
</template>
