export interface IMeteorology {
    id: number;
    month: string;
    I: number;
    tmax: number;
    tmin: number;
    created_at: string;
    updated_at?: string;
  }