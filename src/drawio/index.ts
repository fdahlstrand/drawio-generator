export { File } from "./file";
export { Diagram } from "./diagram";

import { ShapeBuilder } from "./shape-builder";

export const rectangle = (id: string) =>
  new ShapeBuilder(id, {
    whiteSpace: "wrap",
    html: 1,
    rounded: 0,
  })
    .at(0, 0)
    .withSize(240, 120)
    .withLabel("");

export const circle = (id: string) =>
  new ShapeBuilder(id, {
    ellipse: "",
    whiteSpace: "wrap",
    aspect: "fixed",
    html: 1,
  })
    .at(0, 0)
    .withSize(80, 80)
    .withLabel("");
