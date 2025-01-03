<script setup lang="ts">
import { useImage, watchThrottled } from "@vueuse/core";
const { src } = defineProps<{ src: string }>();
const { isLoading } = useImage({ src: src });
const onImageError = ($event: Event) => {
    return $event.target
        ? (($event.target as HTMLImageElement).src = image_404)
        : "";
};
const image_loading =
    "https://placehold.co/400x400/f4f4f4/silver?font=raleway&text=...";

const image_404 =
    "https://placehold.co/400x400/f4f4f4/silver?font=raleway&text=404";

const target = ref(null);
const isIntersecting = ref(false);
useIntersectionObserver(target, ([{ isIntersecting: _isIntersecting }]) => {
    isIntersecting.value = _isIntersecting;
});
const isVisible = ref(false);
watchThrottled(isIntersecting, () => (isVisible.value = true), {
    throttle: 1000,
});
</script>

<template>
    <NuxtImg ref="target" loading="lazy" :src="image_404" v-if="!src" />
    <NuxtImg
        ref="target"
        loading="lazy"
        v-else-if="isLoading || !isVisible"
        :src="image_loading"
    />
    <NuxtImg
        ref="target"
        loading="lazy"
        v-else
        :scr="src"
        v-bind="$attrs"
        @error="onImageError"
    />
</template>
