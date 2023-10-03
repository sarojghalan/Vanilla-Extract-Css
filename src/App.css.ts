import { style } from "@vanilla-extract/css";
import { global } from "./global.css";
export const flexContainer = style({
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
  width: "100vw",
  backgroundColor: global.colors.primary,
});

