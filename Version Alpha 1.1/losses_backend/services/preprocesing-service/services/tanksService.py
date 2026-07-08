from dto.tankDTO import TankDTO
from utils.apiObject import APIObject

class TankService:

    def __init__(self):
        
        self.data = []        
        self.api = APIObject('http://losses_data_service:5000/api/v1/losses-data/get-tanks')

    def getTanks(self):
        
        response = self.api.getData()
        for row in response:    
            self.data.append(TankDTO(
                row['id'], 
                row['name'], 
                row['isIsolated'], 
                row["diameter"], 
                row["spaceTank"],
                row["alpha"],
                row["tankHeight"],
                row["hlx"],
                row["hln"],
                row["pr"],
                row["ge"],
                row["tc"],
                row["hro"],
                row["hs"] 
                ))

        return self.data