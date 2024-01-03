interface Link {
    label: string;
    to: string;
}
interface Value {
    slug: string | number;
    [x: string]: any;
}
interface InternalItem {
    value: Value;
}
