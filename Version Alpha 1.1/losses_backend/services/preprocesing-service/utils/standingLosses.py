from utils.functions import Global
import numpy as np

class StandingLosses:    
    
    def __init__(self):
        self.pa = 14.7
        self.r = 10.731
        self.functions = Global()
    
    def getFactorKe(self,pva, dpb, dtv, tla, a, b, pa):
        kei = 0
        if( (pva <=0.1) and (dpb <=0.063) ):
            kei = 0.0018*dtv
        else:
            tln = tla - 0.25*dtv
            tlx = tla + 0.25*dtv;
            pvn = np.exp(a - (b / tln));
            pvx = np.exp(a - (b / tlx));
            dpv = pvx - pvn;
            ke = (dtv / tla) + (dpv - dpb) / (pa - pva);
            kei = 1 if ke > 1 else ke
        return kei
        
    def calculateLs(self, ht,i, tb, taa, alpha, a,b,tmax, tmin, mv, hl, hs ,hro, d, pr, tc):
        dpb = self.functions.getDpb(tc, pr)
        tb = tb if ht == 1 else self.functions.getTempLiq(taa, alpha, i) 
        tla = 0.4 * taa + 0.6 * (tb + 459.67) + 0.005 * alpha * i;
        tv = 0.7 * taa + 0.3 * (tb + 459.67) + 0.009 * alpha * i;
        dtv = 0.7 * (tmax - tmin) + 0.02 * alpha * i;
        hvo = hs - hl + hro;
        pva = (np.exp(a - b / tla));
        ke = self.getFactorKe(pva, dpb, dtv, tla, a, b, self.pa);
        ks = 1 / (1 + 0.053 * pva * hvo);
        wv = (mv * pva) / (self.r * tv);
        pi = np.pi;
        
        
        ls = (pi * (d**2) / 4) * hvo * ks * ke * wv;
        
        #print("\ndpb:{0}, tb:{1}, tla:{2}, pva:{3}, tv:{4}, wv:{5}, ke:{6}, ks:{7},ls:{8}, hvo:{9}".format(dpb,tb,tla,pva,tv,wv,ke,ks,ls,hvo))
        #print("\n")
        return ls/24
