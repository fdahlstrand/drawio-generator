import { Shape, Style } from "./shape";

export class ShapeBuilder {
  private shape: Shape;

  constructor(id: string, style: Style) {
    this.shape = { id, style };
  }

  public create(): Shape {
    return this.shape;
  }

  public at(x: number, y: number): ShapeBuilder {
    this.shape = { ...this.shape, x, y };

    return this;
  }

  public withSize(width: number, height: number): ShapeBuilder {
    this.shape = { ...this.shape, width, height };

    return this;
  }

  public withWidth(width: number): ShapeBuilder {
    this.shape = { ...this.shape, width };

    return this;
  }

  public withHeight(height: number): ShapeBuilder {
    this.shape = { ...this.shape, height };

    return this;
  }

  public withLabel(label: string): ShapeBuilder {
    this.shape = { ...this.shape, label };

    return this;
  }

  public withStyle(style: Style): ShapeBuilder {
    this.shape = { ...this.shape, style: { ...this.shape.style, ...style } };

    return this;
  }
}
