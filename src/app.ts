import { writeFileSync } from "node:fs";
import { XMLBuilder } from "fast-xml-parser";
import * as DrawIO from "./drawio";

const obj: DrawIO.File = {
  mxfile: {
    $compressed: false,
    $modified: new Date().toISOString(),
    $version: "20.3.0",
    diagram: [
      {
        $id: "Yada-1",
        $name: "Page-1",
        mxGraphModel: {
          root: {
            mxCell: [
              {
                $id: "0",
              },
              {
                $id: "1",
                $parent: "0",
              },
              {
                $id: "Box1",
                $value: "<b>Hello</b>",
                $style: "rounded=0;whiteSpace=wrap;html=1;",
                $vertex: "1",
                $parent: "1",
                mxGeometry: {
                  $x: 100,
                  $y: 100,
                  $width: 240,
                  $height: 120,
                  $as: "geometry",
                },
              },
              {
                $id: "Box2",
                $value: "<i>World</i>",
                $style: "rounded=1;whiteSpace=wrap;html=1;",
                $vertex: "1",
                $parent: "1",
                mxGeometry: {
                  $x: 340,
                  $y: 220,
                  $width: 240,
                  $height: 120,
                  $as: "geometry",
                },
              },
              {
                $id: "Line1",
                $value: "<small>This is the line</small>",
                $style: "endArrow=none;html=1;rounded=0;strokeColor=default;",
                $edge: "1",
                $parent: "1",
                $source: "Box1",
                $target: "Box2",
                mxGeometry: {
                  $as: "geometry",
                  Array: {
                    $as: "points",
                    mxPoint: [{ $x: 460, $y: 160 }],
                  },
                },
              },
            ],
          },
        },
      },
    ],
  },
};

const builder = new XMLBuilder({
  ignoreAttributes: false,
  attributeNamePrefix: "$",
  format: true,
});

const xml = builder.build(obj) as string;
writeFileSync("./.work/out.drawio", xml, "utf-8");
