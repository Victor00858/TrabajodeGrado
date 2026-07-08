import numpy as np
import pandas as pd

class LossesOilGasDTO:
  def __init__(self,
               id,
               date,
               lt_oil_gas, 
               tla_oil_gas,
               tb_oil_gas, 
               hl_oil_gas, 
               pva_oil_gas, 
               taa_oil_gas, 
               tank_id):
    self.id = id 
    self.date = pd.to_datetime(date, yearfirst=False, format='%d-%m-%Y %H:%M:%S')
    self.lt_oil_gas = np.float64(lt_oil_gas)
    self.tla_oil_gas = np.float64(tla_oil_gas)
    self.tb_oil_gas = np.float64(tb_oil_gas)
    self.hl_oil_gas = np.float64(hl_oil_gas)
    self.pva_oil_gas = np.float64(pva_oil_gas)
    self.taa_oil_gas = np.float64(taa_oil_gas)
    self.tanks_id = tank_id
