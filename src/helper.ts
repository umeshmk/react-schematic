// why idDef ? Why check just types & not values ?
// Because we want 0, '', false as values.
export const isDef = (v: any) => typeof v !== 'undefined';
export const isUnDef = (v: any) => typeof v === 'undefined';
// export const isStr = (v:any) => typeof v === "string";
export const isObj = (v: any) => typeof v === 'object';
export const isNotObj = (v: any) => typeof v !== 'object';
