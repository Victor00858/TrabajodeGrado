class Global:

    def getDpb(self, pr, pbx=0, pbn=0):
        """Método encargado de calcular el delta PB"""
        dpb = 0
        if(pr):
            dpb = pbx-pbn
        else:
            dpb = 0.06
        return dpb

    def getPo(self,pr, pbx=0, pbn=0):
        """Método encargado de calcular el po"""
        po = 0
        if(pr):
            po = (pbx+pbn)/2
        return po

    def getPbxi(self,pr, pbx=0):
        """Método encargado de calcular el pbxi"""
        pbxi = 0.03
        if(pr):
            pbxi = pbx
        return pbxi


    def getTempLiq(self,taa, alpha, i):
        try:
            return taa - 0.003*i*alpha
        except:
            raise Exception("Error en los parámetros")