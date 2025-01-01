import { capitalize } from "lodash";
import _ from "lodash";
export { map, zipObject } = _;

export const { format: formatNumber } = Intl.NumberFormat("en-GB", {
    notation: "compact",
    maximumFractionDigits: 1,
    compactDisplay: 'short',
});

export const yesno = (value = "") => (!is_falsy(value) ? "Yes" : "No");
export const is_falsy = (value: any) =>
    ["", "N", "n", undefined, null, 0].includes(value);
export const toTitleCase = (string = "") => capitalize(string);
