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
