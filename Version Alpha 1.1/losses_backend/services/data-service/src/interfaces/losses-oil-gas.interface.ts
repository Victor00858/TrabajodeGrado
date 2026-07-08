
interface ILossesOilGas {
  id: number;
  date: Date;
  lt_oil_gas: number;
  tla_oil_gas: number;
  tb_oil_gas: number;
  hl_oil_gas: number;
  pva_oil_gas: number;
  taa_oil_gas: number;
  created_at: Date;
  updated_at?: Date;
  tanks_id: number;
}