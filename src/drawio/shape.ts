import { MxCell } from "./xml";

export interface ShapeInitializer {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
  parent?: string;
}

export abstract class Shape {
  public id: string;
  public parent: string;
  public label: string;
  public x: number;
  public y: number;
  public width: number;
  public height: number;

  protected constructor(
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
    this.id = id;
    this.parent = parent;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.label = label;
  }

  abstract toDto(): MxCell;
}
