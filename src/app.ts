import { writeFileSync } from "node:fs";

interface BoxLayout {
  id: string;
  label: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Point {
  x: number;
  y: number;
}

interface ConnectionLayout {
  id: string;
  label: string;
  source: string;
  target: string;
  points: Point[];
}

function box(layout: BoxLayout) {
  return {
    $: {
      id: layout.id,
      value: layout.label,
      style: "rounded=0;whiteSpace=wrap;html=1",
      vertex: 1,
      parent: "1",
    },
    mxGeometry: {
      $: {
        x: layout.x,
        y: layout.y,
        width: layout.width,
        height: layout.height,
        as: "geometry",
      },
    },
  };
}

function connect(layout: ConnectionLayout) {
  return {
    $: {
      id: layout.id,
      value: layout.label,
      style: "endArrow=none;html=1;rounded=0;",
      parent: "1",
      edge: 1,
      source: layout.source,
      target: layout.target,
    },
    mxGeometry: {
      $: {
        as: "geometry",
      },
      Array: {
        $: { as: "points" },
        mxPoint: layout.points.map((p) => ({ $: { x: p.x, y: p.y } })),
      },
    },
  };
}

const objects = [
  box({
    id: "box-1",
    label: "<u>Hello & A</u>",
    x: 80,
    y: 80,
    width: 240,
    height: 120,
  }),
  box({
    id: "box-2",
    label: "<b>Hello & B</b>",
    x: 360,
    y: 400,
    width: 240,
    height: 120,
  }),

  connect({
    id: "line-1",
    label: "<i>A line<i>",
    source: "box-1",
    target: "box-2",
    points: [
      { x: 500, y: 200 },
      { x: 300, y: 300 },
    ],
  }),
];

const obj = {
  mxfile: {
    $: {
      compressed: false,
      modified: new Date().toISOString(),
      version: "20.3.0",
    },
    diagram: {
      $: {
        id: "yada-1",
        name: "My Diagram",
      },
      mxGraphModel: {
        root: {
          mxCell: [
            { $: { id: "0" } },
            { $: { id: "1", parent: "0" } },
            ...objects,
          ],
        },
      },
    },
  },
};

writeFileSync("./.work/test.txt", "hello", "utf-8");
