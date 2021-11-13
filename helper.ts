// why idDef ? Why check just types & not values ?
// Because we want 0, '', false as values.
export const isUnDef = (prop) => typeof prop === undefined;
export const isStr = (prop) => typeof prop === "string";
export const isObj = (prop) => typeof prop === "object";
