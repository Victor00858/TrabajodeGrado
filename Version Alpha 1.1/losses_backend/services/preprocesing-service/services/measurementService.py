from dto.substancesDTO import SubstanceDTO
from dto.measurementDataDTO import MeasurementDataDTO
from dto.measurementDTO import MeasurementDTO

from utils.apiObject import APIObject


class MeasurementService:

    def __init__(self):

        self.api = APIObject('http://losses_data_service:5000/api/v1/losses-data/get-measurements-per-minute-by-tank/');
        self._data = []
        
    def getMeasurementsPerMinute(self,tankId):
        temp = self.api.url
        self.api.url += str(tankId)
        response = self.api.getData()
        self.api.url = temp

        substance = None

        self._data = []

        for row in response:
            measurementData = []
            for measurement in row["measurementData"]:
                measurementData.append(MeasurementDataDTO(
                    measurement["value"], 
                    measurement["unit"]["name"],
                    measurement["valueType"]["name"]
                ))
            
            substance = SubstanceDTO(
                    row["substance"]["name"],
                    row["substance"]["pmLiquid"],
                    row["substance"]["pmVapor"],
                    row["substance"]["a"],
                    row["substance"]["b"],
                    row["substance"]["kc"]
                    )
            self._data.append(MeasurementDTO(row["id"], row["date"], measurementData, substance))

        return self._data