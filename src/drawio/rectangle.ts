import { MxCell } from "./xml";

export abstract class Shape {
  abstract toDto(): MxCell;
}

export class Rectangle extends Shape {
  public label: string;
  public parent: string;
  public id: string;
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  constructor(
    id: string,
    {
      x = 0,
      y = 0,
      width = 240,
      height = 120,
      label = "",
      parent = "1",
    }: {
      x?: number;
      y?: number;
      width?: number;
      height?: number;
      label?: string;
      parent?: string;
    }
  ) {
    super();
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.label = label;
    this.parent = parent;
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
