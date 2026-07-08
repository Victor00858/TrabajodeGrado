import numpy as np
class MeasurementDataDTO:
    def __init__(self, value, unit, value_type):
        self.value = np.float64(value)
        self.unit = unit
        self.value_type = value_type
