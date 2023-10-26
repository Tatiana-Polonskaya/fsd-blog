export const MAX_COUNT_SYMBS = 150;

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function getShortDescription(string: string) {
    return string.length > MAX_COUNT_SYMBS
        ? string.substring(0, MAX_COUNT_SYMBS) + "... "
        : string;
}
