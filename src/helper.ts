// why idDef ? Why check just types & not values ?
// Because we want 0, '', false as values.
export const isDef = (v) => typeof v !== 'undefined';
export const isUnDef = (v) => typeof v === 'undefined';
// export const isStr = (v) => typeof v === "string";
export const isObj = (v) => typeof v === 'object';
export const isNotObj = (v) => typeof v !== 'object';
