export type MxFile = [
  {
    ":@": {
      modified: string;
      compressed: boolean;
      version?: string;
    };
    mxfile: Diagram[];
  }
];

export interface Diagram {
  ":@": {
    id: string;
    name: string;
  };
  diagram: MxGraphModel[];
}

export interface MxGraphModel {
  mxGraphModel: Root[];
}

export interface Root {
  root: MxCell /* | MxObject */[];
}

export interface MxCell {
  ":@": {
    id: string;
    parent?: string;
    value?: string;
    style?: string;
    vertex?: string;
    edge?: string;
    source?: string;
    target?: string;
  };
  mxCell?: MxGeometry[];
}

export interface MxGeometry {
  ":@": {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    as: "geometry";
  };
  mxGeometry: MxArray[];
}

export interface MxArray {
  ":@": {
    as: "points";
  };
  mxArray: MxPoint[];
}

export interface MxPoint {
  ":@": {
    x: number;
    y: number;
  };
  mxPoint: object[];
}
