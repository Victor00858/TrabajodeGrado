import numpy as np
class SubstanceDTO:
    def __init__(self, name, pmLiquid, pmVapor, a, b, kc):
        self.name = name
        self.pmLiquid = np.float64(pmLiquid)
        self.pmVapor = np.float64(pmVapor)
        self.a = np.float64(a)
        self.b = np.float64(b)
        self.kc = np.float64(kc)