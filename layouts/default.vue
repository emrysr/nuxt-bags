<script setup lang="ts">
const links = [
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
            <slot></slot>
        </section>

        <AppFooter> </AppFooter>
    </div>
</template>
