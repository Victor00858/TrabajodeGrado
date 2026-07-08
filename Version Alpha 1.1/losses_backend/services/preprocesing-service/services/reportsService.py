import requests
import json

class ReportService:

    def __init__(self):
        self.baseURL = 'http://losses_reports_service:4080/api/v1/losses-report'

    def sendMesaurementsPerHour(self,measurementssPerHour):
        
        url = self.baseURL + '/save-measurements-per-hour'

        headers = {'Content-Type': 'application/json'}        
        response = requests.post(url, data=measurementssPerHour,headers=headers)

        print(response)
        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')
        
    def sendLossesmeasurements(self, lossesMesaurement):

        url = self.baseURL + '/save-measurements-per-hour'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=json.dumps(lossesMesaurement),headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')
        
    
    def sendLossesErrorPercent(self, errorPercent):

        url = self.baseURL + '/save-measurements-per-hour'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=errorPercent,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')
        

    def sendPva(self, pvaData ):
        url = self.baseURL + '/save-pva-measurements'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=pvaData,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')
        

    def sendTla(self, tlaData ):
        url = self.baseURL + '/save-tla-measurements'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=tlaData ,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')
        

    def sendTb(self, tbData ):
        url = self.baseURL + '/save-tb-measurements'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=tbData ,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')


    def sendHl(self, hlData ):
        url = self.baseURL + '/save-hl-measurements'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=hlData ,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')


    def sendLt(self, ltData ):
        url = self.baseURL + '/save-lt-measurements'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=ltData ,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')
        

    def sendTaa(self, taaData ):
        url = self.baseURL + '/save-taa-measurements'

        headers = {'Content-type':'application/json'}
        response = requests.post(url, data=taaData ,headers=headers)

        if response.status_code == 201:
            return response.json()
        else:
            raise Exception('Error al obtener los datos de la API')