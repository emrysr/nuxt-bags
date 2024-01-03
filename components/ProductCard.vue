<script setup lang="ts">
const selected = defineModel("selected");

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
</script>

<template>
    <div class="card product" :style="style">
        <div class="card-image">
            <a class="image" @click="selected = product">
                <img :src="image_404" v-if="!product['image url']" />
                <img v-else-if="isLoading" :src="image_loading" />
                <img
                    v-else
                    :src="product['image url']"
                    alt=""
                    @error="onImageError"
                />
            </a>
        </div>
        <div class="card-content">
            <a @click="selected = product">
                <p>
                    <strong>{{ product.id }}.{{ product.name }}</strong>
                </p>
                <p>
                    <span class="icon-text">
                        <span>
                            {{ product.company }}
                        </span>
                    </span>
                </p>
                <p class="has-text-grey">
                    <strong>{{ product.price }}</strong>
                </p>
            </a>
        </div>
    </div>
</template>
<style scoped>
.card-image img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: top;
}
</style>
