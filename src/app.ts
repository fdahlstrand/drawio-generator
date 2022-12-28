import { writeFileSync, readFileSync } from "node:fs";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import * as DrawIO from "./drawio";
import { MxFile } from "./drawio/xml";

type StyleEntry =
  | ["ellipse"]
  | ["whiteSpace", "wrap"]
  | ["html", 0 | 1]
  | ["aspect", "fixed"];

type Style = StyleEntry[];

const style: Style = [
  ["ellipse"],
  ["whiteSpace", "wrap"],
  ["html", 1],
  ["aspect", "fixed"],
];

interface Shape {
  id: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
}

class ShapeBuilder {
  private shape: Shape;

  constructor(id: string) {
    this.shape = { id };
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
}

new ShapeBuilder("Box-1").at(10, 10).withSize(80, 80).withLabel("<b>Hello</b>");

const file = new DrawIO.File({});
file.diagrams = [new DrawIO.Diagram("Diagram-1", { name: "Page-1" })];
file.diagrams[0].objects = [
  new DrawIO.Rectangle("Box-1", {
    label: "<b>Hello</b>",
    x: 100,
    y: 100,
  }),
  new DrawIO.Circle("Round", {
    label: "<i>Round</i>",
    x: 140,
    y: 200,
    width: 160,
    height: 160,
  }),
  new DrawIO.Rectangle("Box-2", {
    label: "<b>World</b>",
    x: 100,
    y: 300,
  }),
];

const builder = new XMLBuilder({
  ignoreAttributes: false,
  preserveOrder: true,
  attributeNamePrefix: "",
  suppressEmptyNode: true,
  format: true,
});

const xml = builder.build(file.toDto()) as string;
writeFileSync("./.work/out.drawio", xml.trim(), "utf-8");

const input = readFileSync("./.work/test.drawio", "utf-8");

const parsed = new XMLParser({
  ignoreAttributes: false,
  preserveOrder: true,
  attributeNamePrefix: "",
}).parse(input) as MxFile;

console.log(input);
console.log(parsed);
