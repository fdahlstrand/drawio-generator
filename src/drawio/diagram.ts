import { Shape, toDto } from "./shape";
import { ShapeBuilder } from "./shape-builder";
import { Diagram as XmlDiagram } from "./xml";

export class Diagram {
  public id: string;
  public name: string;
  public objects: (Shape | ShapeBuilder)[] = [];

  constructor(id: string, { name = "Page-1" }: { name?: string }) {
    this.id = id;
    this.name = name;
  }

  toDto(): XmlDiagram {
    return {
      ":@": {
        id: this.id,
        name: this.name,
      },
      diagram: [
        {
          mxGraphModel: [
            {
              root: [
                { ":@": { id: "0" }, mxCell: [] },
                { ":@": { id: "1", parent: "0" }, mxCell: [] },
                ...this.objects.map(toDto),
              ],
            },
          ],
        },
      ],
    };
  }
}
