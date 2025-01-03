<script setup lang="ts">
useSeoMeta({
    title: "r/onebag",
    ogTitle: "r/onebag",
    description: "A web app from a spreadsheet found on r/onebag redit",
    ogDescription: "A web app from a spreadsheet found on r/onebag redit",
    ogImage: "/favicon.png",
    twitterCard: "summary_large_image",
});
useHead({
    title: "r/OneBag App",
    meta: [
        {
            name: "description",
            content: "A web app from a spreadsheet found on r/onebag redit",
        },
    ],
    bodyAttrs: {
        class: "test",
    },
});
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
