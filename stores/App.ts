import { set } from "lodash";

export const useAppStore = defineStore("app", () => {
    const selectedProduct = ref<Product | null>(null);
    return {
        selectedProduct,
    };
});
