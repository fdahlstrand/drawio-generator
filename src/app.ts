import { writeFileSync, readFileSync } from "node:fs";
import { XMLBuilder, XMLParser } from "fast-xml-parser";
import * as DrawIO from "./drawio";
import { MxFile } from "./drawio/xml";

const file = new DrawIO.File({});
file.diagrams = [new DrawIO.Diagram("Diagram-1", { name: "Page-1" })];
file.diagrams[0].objects = [
  DrawIO.rectangle("Box-1").at(100, 100).withLabel("<b>Hello</b>").create(),
  DrawIO.circle("Round")
    .at(140, 200)
    .withSize(160, 160)
    .withLabel("<i>Round</i>")
    .create(),
  DrawIO.rectangle("Box-2")
    .at(100, 300)
    .withLabel("<b>World</b>")
    .withStyle({ rounded: 1 })
    .create(),
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
