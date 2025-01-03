import slugify from "slugify";
import { map } from "../utils";
export interface Product {
    [x: string]: string;
}
export interface Style {
    [x: string]: string;
}
export interface Filters {
    [x: string]: any;
}
export const useProductsStore = defineStore("products", () => {
    const has_loaded = ref(false);
    const breakpoints = [
        { name: "Mobile Small", min: null, max: 393, columns: 1 },
        { name: "Mobile", min: 394, max: 430, columns: 2 },
        { name: "Mobile", min: 431, max: 640, columns: 2 },
        { name: "Mobile", min: 641, max: 768, columns: 3 },
        { name: "Phablet", min: 769, max: 991, columns: 3 },
        { name: "Tablet", min: 992, max: 1023, columns: 4 },
        { name: "Desktop", min: 1024, max: 1215, columns: 4 },
        { name: "Widescreen", min: 1216, max: 1407, columns: 5 },
        { name: "FullHD", min: 1408, max: null, columns: 6 },
    ];
    function getBreakpoint(width: number) {
        for (let i = 0; i < breakpoints.length; i++) {
            const breakpoint = breakpoints[i];
            if (
                (breakpoint.min === null || width >= breakpoint.min) &&
                (breakpoint.max === null || width <= breakpoint.max)
            ) {
                return breakpoint;
            }
        }
        return null;
    }

    const products = ref<Product[]>([]);

    // make computed products_mock which is a small subset of products
    const products_mock = computed(() => {
        return products.value.slice(0, 3);
    });

    const fetchProducts = async () => {
        const { data, pending, error, refresh } = await useFetch(
            "/api/products/",
            {
                onRequest({ request, options }) {
                    // Set the request headers
                    options.headers = options.headers || {};
                    options.headers.set("Authorization", "...");
                },
                onRequestError({ request, options, error }) {
                    // Handle the request errors
                },
                onResponse({ request, response, options }) {
                    // Process the response data
                    has_loaded.value = true;
                },
                onResponseError({ request, response, options }) {
                    // Handle the response errors
                },
            }
        );
        if (!data.value) {
            Promise.reject();
            return;
        }
        // api returns column titles as first row.. convert to list of objects keyed by first row
        const fields = data.value.values.slice(0, 1).flat();
        products_raw.value = map(data.value.values.slice(1), (item: string[]) =>
            zipObject(fields, item)
        );
        // add a slug field
        products.value = map(products_raw.value, (product) => {
            product.slug = slugify(product.name, {
                lower: true, // convert to lower case, defaults to `false`
                strict: true, // strip special characters except replacement, defaults to `false`
            });
            return product;
        });
        return Promise.resolve(products.value);
    };
    const products_raw = ref();

    const DEFAULT_FILTERS = { search: "", company: "", laptop: "" } as Filters;
    const filters = ref(DEFAULT_FILTERS);
    const is_filtered = computed(() =>
        Object.values(filters.value).some(Boolean)
    );
    const _filter = (_filters: Filters) => {
        if (!products.value || !products.value.length) return [];
        return products.value.filter((product) => {
            // return all if no filters in place
            if (!is_filtered.value) return products;
            // return true if company matches
            if (product.company === _filters.company) {
                return true;
            }
            // return true if text search has any matches
            if (
                _filters.search &&
                (product.name + product.notes + product.material)
                    .toLowerCase()
                    .includes(_filters.search.toLowerCase())
            ) {
                return true;
            }
            // return true if laptop size matches
            if (product.laptop === _filters.laptop) {
                return true;
            }
            // return true if boolean fields are set
            const active_filters = Object.keys(_filters).reduce((acc, curr) => {
                if (_filters[curr]) acc.push(curr);
                return acc;
            }, [] as string[]);
            const matches = active_filters.map(
                (field) => !is_falsy(product[field])
            );
            // if ALL the active filters match
            if (matches.every(Boolean)) return true;

            // this item didn't match on any of the above - do not include in results
            return false;
        });
    };
    // create another _mock_filter function to use the mock products
    const _mock_filter = (_filters: Filters) => {
        if (!products_mock.value || !products_mock.value.length) return [];
        return products_mock.value.filter((product) => {
            // return all if no filters in place
            if (!is_filtered.value) return products_mock;
            // return true if company matches
            if (product.company === _filters.company) {
                return true;
            }
            // return true if text search has any matches
            if (
                _filters.search &&
                (product.name + product.notes + product.material)
                    .toLowerCase()
                    .includes(_filters.search.toLowerCase())
            ) {
                return true;
            }
            // return true if laptop size matches
            if (product.laptop === _filters.laptop) {
                return true;
            }
            // return true if boolean fields are set
            const active_filters = Object.keys(_filters).reduce((acc, curr) => {
                if (_filters[curr]) acc.push(curr);
                return acc;
            }, [] as string[]);
            const matches = active_filters.map(
                (field) => !is_falsy(product[field])
            );
            // if ALL the active filters match
            if (matches.every(Boolean)) return true;

            // this item didn't match on any of the above - do not include in results
            return false;
        });
    };
    const results = computed(() => _mock_filter(filters.value));

    return {
        products,
        products_mock,
        fetchProducts,
        getBreakpoint,
        products_raw,
        filters,
        is_filtered,
        results,
        has_loaded,
    };
});
