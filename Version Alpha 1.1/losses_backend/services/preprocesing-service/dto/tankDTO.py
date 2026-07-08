import numpy as np

class TankDTO:
    def __init__(self,
                id, 
                name, 
                isIsolated, 
                diameter, 
                spaceTank, 
                alpha, 
                tankHeight, 
                hlx, 
                hln,
                pr,
                ge,
                tc,
                hro,
                hs
            ):
        
        self.id = np.int64 (id)
        self.name = name
        self.isIsolated = np.int64( isIsolated )
        self.diameter = np.float64( diameter )
        self.spaceTank = np.float64( spaceTank )
        self.alpha = np.float64( alpha )
        self.tankHeight = tankHeight
        self.hlx = np.float64( hlx )
        self.hln = np.float64( hln )
        self.pr = np.int64( pr )
        self.ge = np.int64( ge )
        self.tc = np.int64( tc )
        self.hro = np.float64( hro )
        self.hs = np.float64( hs )