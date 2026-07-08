
from utils.functions import Global
import numpy as np

class WorkLosses:
    
    def __init__(self):
        self.pa = 14.7
        self.r = 10.731
        self.functions = Global()
    
    def getKn(self,n):
        kn = 1
        if( n > 36):
            kn = (180+n)/(6*n)
        return kn
    
    
    def getKb(self,dpb, po, pbxi, pa, kn, pva):
        
        if(-0.03 < dpb <=0.03):
            kb = 1
        else:
            kbp = kn * (pbxi+pa) / (po+pa)
            if(kbp <=1):
                kb = 1
            else:
                kb = (((po + pa) / kn) - pva) / (pbxi + pa - pva);
        return kb;
    
    def calculateLW(self, ht,tc, pr, tb, taa, alpha, i, a, b, mv, hq, d, hlm, kc):
        dpb = self.functions.getDpb(tc, pr)
        po = self.functions.getPo(pr)
        pbxi = self.functions.getPbxi(pr)
        tb = tb if ht else self.functions.getTempLiq(taa, alpha, i)
        tla = 0.4 * taa + 0.6 * (tb + 459.67) + 0.005 * alpha * i
        pva = (np.exp(a - (b / tla)))
        tv = 0.7 * taa + 0.3 * (tb + 459.67) + 0.009 * alpha * i
        wv = (mv * pva) / (self.r * tv)
        pi = np.pi
        vq = (hq*pi*d**2)/4
        n = (hq / hlm)
        kn = self.getKn(n)
        kb = self.getKb(dpb, po, pbxi, self.pa, kn, pva)
        lw = vq * kn * kc * kb * wv;
        
        return lw/24, tla, pva