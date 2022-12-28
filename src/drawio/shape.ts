import { MxCell } from "./xml";

export interface Style {
  ellipse?: "";
  whiteSpace?: "wrap";
  html?: 0 | 1;
  aspect?: "fixed";
  rounded?: 0 | 1;
}

export interface Shape {
  id: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
  style: Style;
}

export function toDto(s: Shape): MxCell {
  const stl = Object.keys(s.style)
    .map((key) => key as keyof typeof s.style)
    .map((key) => {
      if (s.style[key] === "") {
        return `${key};`;
      } else {
        const value = (s.style[key] ?? "<undefined>").toString();
        return `${key}=${value};`;
      }
    })
    .join("");

  return {
    ":@": {
      id: s.id,
      value: s.label,
      style: stl,
      vertex: "1",
      parent: "1",
    },
    mxCell: [
      {
        ":@": {
          x: s.x,
          y: s.y,
          width: s.width,
          height: s.height,
          as: "geometry",
        },
        mxGeometry: [],
      },
    ],
  };
}
