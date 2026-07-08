export interface IUnit {
  id: number;
  name: string;
  symbol: string | null;
  created_at: Date | null;
  updated_at: Date | null;
  unit_types_id: number;
}
