from utils.standingLosses import StandingLosses
from utils.workLosses import WorkLosses

class Perdidas:
    
    def __init__(self, meteorologia_df):
        self.perdidasPorTrabajo = WorkLosses()
        self.perdidasPermanentes = StandingLosses()
        self.meteorologia = meteorologia_df
        
    def calcularPerdidaTotal(self, row):
        #def calculateLW(self, ht,tc, pr, tb, taa, alpha, i, a, b, mv, hq, d, hlm, kc):
        
        month = self.meteorologia.iloc[row["date"].month-1,:]
          
        taa= month["tmean"] #537.408
        tmax= month["tmax"]  ##542.612
        tmin= month["tmin"] ##532.204 
        i= month["i"] ##1741.538000
        
    
        lw, tla, pva = self.perdidasPorTrabajo.calculateLW(
                                                 row["ht"], 
                                                 row["tc"],
                                                 row["pr"],
                                                 row["tb"],
                                                 taa,
                                                 row["alpha"], 
                                                 i,
                                                 row["a"],
                                                 row["b"],
                                                 row["pmVapor"],
                                                 row["hq"],
                                                 row["d"],
                                                 row["hlm"],
                                                 row["kc"]
                                                )
        #calculateLs(self, ht,i, tb, taa, alpha, a,b,tmax, tmin, mv, hl, hs ,hro, d, pr, tc):

        ls = self.perdidasPermanentes.calculateLs(
                                                row["ht"],
                                                i,
                                                row["tb"],
                                                taa,
                                                row["alpha"],
                                                row["a"],
                                                row["b"],
                                                tmax,
                                                tmin,
                                                row["pmVapor"],
                                                row["hl"],
                                                row["hs"],
                                                row["hro"],
                                                row["d"],
                                                row["pr"],
                                                row["tc"]
                                                )
        return (lw + ls),lw,ls, tla, pva, taa
    