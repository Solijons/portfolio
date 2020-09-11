export interface IReqs {
  labor: number;
  sres: number;
  yrwk: string;
}

export interface IPlanting {
  apollo_field?: string;
  crop: string;
  date?: string;
  id: number;
  name?: string;
  nurseryType: string;
  pollinationType: string;
  site: string;
  size?: number;
  type?: string;
  week?: number;
}
