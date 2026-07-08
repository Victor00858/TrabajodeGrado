import pandas as pd

class MeasurementDTO:
    def __init__(self, id, date, measurement_data, substance):
        self.id = id
        self.date = pd.to_datetime(date, yearfirst=False, format='%d-%m-%Y %H:%M:%S')
        self.measurement_data = measurement_data
        self.substance = substance
