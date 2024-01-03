import * as slugify from "slugify";

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

    const parse = (rows: string[][], fields: string[]) =>
        rows.reduce((acc, curr) => {
            const product: Product = {};
            fields.forEach((key, index) => {
                product[key] = curr[index];
            });
            product.slug = slugify(product.name, {
                lower: true, // convert to lower case, defaults to `false`
                strict: true, // strip special characters except replacement, defaults to `false`
            });
            acc.push(product);
            return acc;
        }, [] as Product[]);

    const products = ref();

    const fetchProducts = async () => {
        const { data, pending, error, refresh } = await useFetch(
            "/api/products/",
            {
                onRequest({ request, options }) {
                    // Set the request headers
                    options.headers = options.headers || {};
                    options.headers.authorization = "...";
                },
                onRequestError({ request, options, error }) {
                    // Handle the request errors
                },
                onResponse({ request, response, options }) {
                    // Process the response data
                },
                onResponseError({ request, response, options }) {
                    // Handle the response errors
                },
            }
        );
        products_raw.value = [...data.value.values.slice(1)];
        // console.log(
        //     keyBy(products_raw.value, function (o) {
        //         return String.fromCharCode(o.code);
        //     })
        // );
        const fields = data.value.values.slice(0, 1).flat();
        products.value = parse(products_raw.value, fields);
        return Promise.resolve(products.value);
    };
    const products_raw = ref();
    return {
        products,
        fetchProducts,
        getBreakpoint,
        products_raw,
    };
});
