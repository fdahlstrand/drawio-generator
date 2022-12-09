export interface File {
  mxfile: MxFile;
}

export interface MxFile {
  $modified: string;
  $compressed: boolean;
  $version?: string;
  diagram: Diagram[];
}

export interface Diagram {
  $id: string;
  $name: string;
  mxGraphModel: MxGraphModel;
}

export interface MxGraphModel {
  root: Root;
}

export interface Root {
  mxCell: MxCell[];
}

export interface MxCell {
  $id: string;
  $parent?: string;
  $value?: string;
  $style?: string;
  $vertex?: string;
  $edge?: string;
  $source?: string;
  $target?: string;
  mxGeometry?: MxGeometry;
}

export interface MxGeometry {
  $x?: number;
  $y?: number;
  $width?: number;
  $height?: number;
  $as: "geometry";
  Array?: MxArray;
}

export interface MxArray {
  $as: "points";
  mxPoint?: MxPoint[];
}

export interface MxPoint {
  $x: number;
  $y: number;
}
