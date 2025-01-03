<script setup lang="ts">
const store = useProductsStore();
defineProps<{ links: Link[] }>();
const colorMode = useColorMode();

const isDark = computed({
    get() {
        return colorMode.value === "dark";
    },
    set() {
        colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
    },
});
</script>
<template>
    <header class="bg-slate-200 dark:bg-slate-800">
        <nav class="flex items-center justify-between" aria-label="Global">
            <NuxtLink to="/" class="p-4">
                <span class="sr-only">OneBag</span>
                <img
                    class="h-8 w-auto"
                    src="/img/r-onebag-tagline.png"
                    alt=""
                />
            </NuxtLink>
            <!-- <Transition name="fade">
                <UKbd
                    v-if="store.has_loaded"
                    :value="`${store.results.length} items`"
                />
            </Transition> -->
            <div class="grow flex items-center justify-end gap-8 p-4">
                <NuxtLink
                    v-for="link in links"
                    :to="link.to"
                    :key="link.to"
                    class="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-300"
                    >{{ link.label }}</NuxtLink
                >
            </div>
            <div class="flex items-center justify-end gap-3 p-4">
                <ClientOnly>
                    <UButton
                        :icon="
                            isDark
                                ? 'i-heroicons-moon-20-solid'
                                : 'i-heroicons-sun-20-solid'
                        "
                        variant="ghost"
                        square
                        aria-label="Theme"
                        class="border-l border-slate-600 pl-8"
                        @click="isDark = !isDark"
                    />

                    <template #fallback>
                        <UButton
                            icon="i-codicon-blank"
                            variant="ghost"
                            square
                            aria-label="Theme"
                            class="border-l border-slate-600 pl-8"
                        />
                    </template>
                </ClientOnly>
                <a
                    href="https://github.com/emrysr"
                    class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    <UIcon name="mdi:github" dynamic size="1.5em" />
                    <span class="sr-only">GitHub account</span>
                </a>
            </div>
        </nav>
    </header>
</template>
