import { capitalize } from "lodash";
export { zipObject, map } from "lodash";

export const { format: formatNumber } = Intl.NumberFormat("en-GB", {
    notation: "compact",
    maximumFractionDigits: 1,
});

export const yesno = (value = "") => (!is_falsy(value) ? "Yes" : "No");
export const is_falsy = (value: any) =>
    ["", "N", "n", undefined, null, 0].includes(value);
export const toTitleCase = (string = "") => capitalize(string);
