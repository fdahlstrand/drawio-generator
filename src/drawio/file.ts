import { Diagram } from "./diagram";
import { File as XmlFile } from "./xml";

export class File {
  public compressed: boolean;
  public diagrams: Diagram[] = [];

  constructor({ compressed = false }: { compressed?: boolean }) {
    this.compressed = compressed;
  }

  toDto(): XmlFile {
    return {
      mxfile: {
        $modified: new Date().toISOString(),
        $compressed: this.compressed,
        $version: "20.3.0",
        diagram: this.diagrams.map((d) => d.toDto()),
      },
    };
  }
}
