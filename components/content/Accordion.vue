<!-- NuxtContent component

Markdown compatible Accordion component for use with NuxtContent <https://content.nuxt.com/>

Attempted to re-use the NuxtUI UAccordion component : https://ui.nuxt.com/elements/accordion

Uses yaml as NuxtContent pages don't have <script> tags. Works with text or list content (not both)

    BASIC USAGE

::accordion
items:
  - label: Getting Started
    content: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
  - label: Installation
    content: Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate
::

    ADVANCED EXAMPLE
    if content is not text and `numbered: true` <ol> used to show list - defaults to <ul>
    list items are parsed as markdown using MDC component

::accordion
---
items:
  - label: Tech Stack
    defaultOpen: true
    numbered: false
    content:
        - "[Typescript](https://www.typescriptlang.org/) - The app is written in Typescript"
        - "[Nuxt](https://nuxt.com/) - Web framework (using Rollup, Vite, Nitro)"
        - "[Canva](https://canva.com/) - Logo and favicon editor"
        - "[Vue](https://vuejs.com/) - Component creation"
---
::


-->
<script setup lang="ts">
interface Item {
    label: string;
    defaultOpen?: boolean;
    content: string;
    numbered?: boolean;
}
const props = defineProps<{ items: Item[] }>();
</script>

<template>
    <UAccordion :items="items">
        <template #default="{ item, index, open }">
            <UButton
                color="gray"
                variant="ghost"
                class="border-b border-gray-200 dark:border-gray-700"
                :ui="{ rounded: 'rounded-none', padding: { sm: 'p-3' } }"
            >
                <span class="truncate">{{ item.label }}</span>
                <template #trailing>
                    <UIcon
                        name="i-heroicons-chevron-right-20-solid"
                        class="w-5 h-5 ms-auto transform transition-transform duration-200"
                        :class="[open && 'rotate-90']"
                    />
                </template>
            </UButton>
        </template>
        <template #item="{ item, index, open, close }">
            <template v-if="typeof item.content === 'string'">
                {{ item.content }}
            </template>
            <component :is="item.numbered ? 'ol' : 'ul'" v-else>
                <MDC :value="line" tag="li" v-for="line in item.content" />
            </component>
        </template>
    </UAccordion>
</template>
