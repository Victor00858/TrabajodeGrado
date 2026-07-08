import numpy as np

class MeteorologyDTO:
    def __init__(self, month, i, tmax, tmin):
        self.month = month
        self.i = np.float64(i)
        self.tmax = np.float64(tmax) 
        self.tmin = np.float64(tmin)
