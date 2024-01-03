<script setup lang="ts">
const route = useRoute();
definePageMeta({
    title: "Product",
});
</script>
<template>
    <main>
        <h1>Detail Page</h1>
        <p>{{ route.meta.slug }}</p>
    </main>
</template>
