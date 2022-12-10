import { Diagram } from "./diagram";
import { MxFile as XmlFile } from "./xml";

export class File {
  public compressed: boolean;
  public diagrams: Diagram[] = [];

  constructor({ compressed = false }: { compressed?: boolean }) {
    this.compressed = compressed;
  }

  toDto(): XmlFile {
    return [
      {
        ":@": {
          modified: new Date().toISOString(),
          compressed: this.compressed,
          version: "20.3.0",
        },
        mxfile: this.diagrams.map((d) => d.toDto()),
      },
    ];
  }
}
