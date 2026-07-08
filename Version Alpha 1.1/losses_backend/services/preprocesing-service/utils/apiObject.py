import requests

class APIObject:

    def __init__(self, url, params=None):
        self.url = url
        self.params = params
        self._data = None

    
    def getData(self):
        """Método encargado de obtener datos de la API definida """
        response = requests.get(self.url, params=self.params)

        if response.status_code == 200:
            self._data = response.json()
            return self._data["data"]
        else:
            raise Exception('Error al obtener los datos de la API')
