import { Media } from "./common";

export type Size = "xs" | "md" | "lg";
export type SizeResponsive = { maxWidth?: Size | Media<Size> };
