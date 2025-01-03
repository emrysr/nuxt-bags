<script setup lang="ts">
const links = [
    {
        label: "Subscribe",
        to: "/subscribe",
    },
    {
        label: "About",
        to: "/about",
    },
    {
        label: "Data",
        to: "/data",
    },
];
</script>
<template>
    <div class="flex flex-col h-screen w-screen">
        <AppHeader :links="links"></AppHeader>
        <section class="flex-grow container mx-auto px-4">
            <UContainer>
                <slot></slot>
            </UContainer>
        </section>
        <AppFooter> </AppFooter>
    </div>
</template>
