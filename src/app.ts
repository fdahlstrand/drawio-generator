import { writeFileSync, readFileSync } from "node:fs";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import * as DrawIO from "./drawio";

const file = new DrawIO.File({});
file.diagrams = [new DrawIO.Diagram("Diagram-1", { name: "Page-1" })];
file.diagrams[0].objects = [
  new DrawIO.Rectangle("Box-1", {
    label: "<b>Hello</b>",
    x: 100,
    y: 100,
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

interface x {
  $host: string;
}

const parsed = new XMLParser({
  ignoreAttributes: false,
  preserveOrder: true,
  attributeNamePrefix: "",
}).parse(input) as x;

console.log(input);
console.log(parsed);
