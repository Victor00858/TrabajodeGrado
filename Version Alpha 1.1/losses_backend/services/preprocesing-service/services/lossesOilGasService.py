from dto.lossesOilGasDTO import LossesOilGasDTO

from utils.apiObject import APIObject


class LossesOilGasService:

    def __init__(self):

        self.api = APIObject('http://losses_data_service:5000/api/v1/losses-data/get-oil-gas/');
        self._data = []
        
    def getLossesOilGas(self,tankId):
        temp = self.api.url
        self.api.url += str(tankId)
        response = self.api.getData()
        self.api.url = temp

        self._data = []

        for row in response:
            self._data.append(LossesOilGasDTO(
                row["id"], 
                row["date"],
                row["lt_oil_gas"],
                row["tla_oil_gas"],
                row["tb_oil_gas"],
                row["hl_oil_gas"],
                row["pva_oil_gas"],
                row["taa_oil_gas"],
                row["tanks_id"]).__dict__)

        return self._data