import pandas as pd
import numpy as np

class PreprocesingFunction:


    def to_ranking(self,temperature):
        return np.float64(temperature) + 459.67

    def mean(self,tempMin, tempMax):
        return np.mean(np.array([np.float64(tempMin), np.float64(tempMax)]))
    
    def getErrorPercent(self,y, y_p):
        
        if(y==0):
            return 0
        return (np.abs(y-y_p)/(y))*100
    
    def toStrFTime(self,dates:pd.Series):
        strDate=[]
        for date in dates:
            strDate.append(date.strftime('%Y-%m-%d %H:%M:%S'))
        return strDate
    
    def calculateHQ(self,productLevel:pd.Series):

        productLevelF = productLevel.copy()
        i = np.concatenate([productLevel.values,[0]])
        f =np.concatenate([[0],productLevelF.values])
        diff_hl = (i-f)[1:-1]
        # definir tamaño de la ventana
        ventana = 60
        # inicializar variables
        suma_total = 0
        inicio_ventana = 0
        fin_ventana = ventana

        hq_data=[]
        # iterar hasta que se consuma el arreglo de datos
        while inicio_ventana < len(diff_hl):
            # sumar valores positivos de la ventana actual
            suma_ventana = np.sum(diff_hl[inicio_ventana:fin_ventana][diff_hl[inicio_ventana:fin_ventana] > 0])
            hq_data.append(suma_ventana)
            # actualizar suma total
            suma_total += suma_ventana
            # mover la ventana
            inicio_ventana += ventana
            fin_ventana += ventana
        
        return (np.array(hq_data, dtype=np.float64)/24) / 304.8