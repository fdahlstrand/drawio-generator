import { Shape, ShapeInitializer } from "./shape";
import { MxCell } from "./xml";

export class Rectangle extends Shape {
  constructor(
    id: string,
    {
      x = 0,
      y = 0,
      width = 240,
      height = 120,
      label = "",
      parent = "1",
    }: ShapeInitializer
  ) {
    super(id, {
      x: x,
      y: y,
      width: width,
      height: height,
      label: label,
      parent: parent,
    });
  }

  toDto(): MxCell {
    return {
      ":@": {
        id: this.id,
        value: this.label,
        style: "rounded=0;whiteSpace=wrap;html=1;",
        vertex: "1",
        parent: this.parent,
      },
      mxCell: [
        {
          ":@": {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            as: "geometry",
          },
          mxGeometry: [],
        },
      ],
    };
  }
}
