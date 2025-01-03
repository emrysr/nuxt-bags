<script setup lang="ts">
import { useImage } from "@vueuse/core";

export interface Props {
    product?: Product;
    style?: Style;
}

const image_loading =
    "https://placehold.co/400x400/f4f4f4/silver?font=raleway&text=...";

const image_404 =
    "https://placehold.co/400x400/f4f4f4/silver?font=raleway&text=404";

const props = withDefaults(defineProps<Props>(), {
    product: () => ({}),
    style: () => ({}),
});

const onImageError = ($event: Event) =>
    $event.target ? (($event.target as HTMLImageElement).src = image_404) : "";

const { isLoading } = useImage({ src: props.product["image url"] });

const app = useAppStore();
const { selectedProduct } = storeToRefs(app);
const onSelected = () => {
    console.log("selected", `${props.product.company} ${props.product.name}`);
    selectedProduct.value = props.product;
};
</script>

<template>
    <UCard class="card product" :style="style" :ui="{ header: 'p-0' }">
        <template #header>
            <NuxtLink :to="`p/${product.slug}`" class="image is-clickable">
                <img :src="image_404" v-if="!product['image url']" />
                <img v-else-if="isLoading" :src="image_loading" />
                <img
                    v-else
                    :src="product['image url']"
                    alt=""
                    @error="onImageError"
                />
            </NuxtLink>
            <!-- <AppImage :src="product['image url']" /> -->
        </template>
        <NuxtLink :to="`p/${product.slug}`">
            <h4>
                {{ product.name }}
            </h4>
            <p>
                {{ product.company }}
            </p>
        </NuxtLink>
        <template #footer>
            {{ product.price }}
        </template>
    </UCard>
</template>
<style scoped>
.is-clickable {
    cursor: pointer;
}
.card-image img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: top;
}
</style>
