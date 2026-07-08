from dto.meteorologiesDTO import MeteorologyDTO
from utils.apiObject import APIObject

class MeteorologyService:

    def __init__(self):
        
        self.data = []        
        self.api = APIObject('http://losses_data_service:5000/api/v1/losses-data/get-meteorologies')

    def getMeteorologies(self):
        
        response = self.api.getData()

        for row in response:
            self.data.append(MeteorologyDTO(month=row["month"], i=row["I"], tmax=row["tmax"], tmin=row["tmin"]).__dict__)
        return self.data