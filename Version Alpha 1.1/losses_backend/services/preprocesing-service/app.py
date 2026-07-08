
from services.reportsService import ReportService
from utils.losses import Perdidas
from services.lossesOilGasService import LossesOilGasService
from services.meteorologyService import MeteorologyService
from utils.preprocesingFunctions import PreprocesingFunction
from models.measurementPerMinute import MeasurementPerMinute
from services.measurementService import MeasurementService
from services.tanksService import TankService
import pandas as pd
import numpy as np

tankService = TankService()
measurementService= MeasurementService()
preprocesingFunctions = PreprocesingFunction()
meteorologyService = MeteorologyService()
lossesOilGasService = LossesOilGasService()
tanks = tankService.getTanks() 
reportService = ReportService()


meteorologies_df = pd.DataFrame(meteorologyService.getMeteorologies())
meteorologies_df["tmax"] = meteorologies_df["tmax"].apply(preprocesingFunctions.to_ranking)
meteorologies_df["tmin"] = meteorologies_df["tmin"].apply(preprocesingFunctions.to_ranking)
meteorologies_df["tmean"] = meteorologies_df.apply(lambda row: preprocesingFunctions.mean(row["tmin"], row["tmax"]), axis=1)

sumaPerdidaTanques = []

for tank in tanks:
    measurements = measurementService.getMeasurementsPerMinute(tank.id)
    
    lossesOilGas = lossesOilGasService.getLossesOilGas(tank.id)

    data = []
    for measurement in measurements:
        measurementPerMinute = MeasurementPerMinute()
        measurementPerMinute.date = measurement.date
        measurementPerMinute.tank = tank.name
        measurementPerMinute.hln = tank.hln
        measurementPerMinute.hlx = tank.hlx
        measurementPerMinute.alpha = tank.alpha
        measurementPerMinute.diameter = tank.diameter
        measurementPerMinute.ge = tank.ge
        measurementPerMinute.hro = tank.hro
        measurementPerMinute.hs = tank.hs
        measurementPerMinute.isIsolated = tank.isIsolated
        measurementPerMinute.spaceTank = tank.spaceTank
        measurementPerMinute.tc = tank.tc
        measurementPerMinute.pr = tank.pr
        measurementPerMinute.a = measurement.substance.a
        measurementPerMinute.b = measurement.substance.b
        measurementPerMinute.kc = measurement.substance.kc
        measurementPerMinute.pmLiquid = measurement.substance.pmLiquid
        measurementPerMinute.pmVapor = measurement.substance.pmVapor
        measurementPerMinute.substance = measurement.substance.name
        measurementPerMinute.productLeveL = measurement.measurement_data[0].value 
        measurementPerMinute.productLeveLUnit = measurement.measurement_data[0].unit
        measurementPerMinute.radarTemperature = measurement.measurement_data[1].value 
        measurementPerMinute.radarTemperatureUnit = measurement.measurement_data[1].unit

        data.append(measurementPerMinute.__dict__)

    data_df = pd.DataFrame(data).iloc[:,[0,1,3,4,5,6,7,8,9,11,14,15,16,17,18,19,20,21,22]]
 
    print(data_df.info())

    date = data_df.groupby(pd.Grouper(key='date', freq='h')).max()['productLeveL'].index
    tc =   data_df.groupby(pd.Grouper(key='date', freq='h')).max()['tc'].values
    pr =   data_df.groupby(pd.Grouper(key='date', freq='h')).max()['pr'].values
    ge=    data_df.groupby(pd.Grouper(key='date', freq='h')).max()['ge'].values
    hro =  data_df.groupby(pd.Grouper(key='date', freq='h')).max()['hro'].values
    a =    data_df.groupby(pd.Grouper(key='date', freq='h')).max()['a'].values
    b =    data_df.groupby(pd.Grouper(key='date', freq='h')).max()['b'].values
    kc =   data_df.groupby(pd.Grouper(key='date', freq='h')).max()['kc'].values
    d =    data_df.groupby(pd.Grouper(key='date', freq='h')).max()['diameter'].values
    hs =   data_df.groupby(pd.Grouper(key='date', freq='h')).max()['hs'].values
    alpha =data_df.groupby(pd.Grouper(key='date', freq='h')).max()['alpha'].values
    hlx =  data_df.groupby(pd.Grouper(key='date', freq='h')).max()['hlx'].values
    hln =  data_df.groupby(pd.Grouper(key='date', freq='h')).max()['hln'].values
    pmVapor =   data_df.groupby(pd.Grouper(key='date', freq='h')).max()['pmVapor'].values
    maxNivel =  data_df.groupby(pd.Grouper(key='date', freq='h')).max()['productLeveL'].values
    minNivel =  data_df.groupby(pd.Grouper(key='date', freq='h')).min()['productLeveL'].values
    promNivel = data_df.groupby(pd.Grouper(key='date', freq='h')).mean()['productLeveL'].values
    minTemp =   data_df.groupby(pd.Grouper(key='date', freq='h')).max()['radarTemperature'].values
    maxTemp =   data_df.groupby(pd.Grouper(key='date', freq='h')).min()['radarTemperature'].values
    promTemp =  data_df.groupby(pd.Grouper(key='date', freq='h')).mean()['radarTemperature'].values
    hq = preprocesingFunctions.calculateHQ(data_df["productLeveL"])
    measurements_per_hour = pd.DataFrame({'date':date,
                                      'pr':pr,
                                      'tc':tc,
                                      'ge':ge,
                                      'hro':hro,
                                      'a':a,
                                      'b':b,
                                      'kc':kc,
                                      'd':d,
                                      'hs':hs,
                                      'hlx':hlx,
                                      'hln':hln,
                                      'hq':hq,
                                      'alpha':alpha,
                                      'pmVapor':pmVapor,
                                      'hlx_h':maxNivel,
                                      'hln_h':minNivel, 
                                      'hl':promNivel,
                                      'tbn':minTemp,
                                      'tbx':maxTemp,
                                      'tb':promTemp})
    
    measurements_per_hour = pd.DataFrame({'date':date,
                                      'pr':pr,
                                      'tc':tc,
                                      'ge':ge,
                                      'hro':hro,
                                      'a':a,
                                      'b':b,
                                      'kc':kc,
                                      'd':d,
                                      'hs':hs,
                                      'hlx':hlx,
                                      'hln':hln,
                                      'alpha':alpha,
                                      'pmVapor':pmVapor,
                                      'hlx_h':maxNivel,
                                      'hln_h':minNivel, 
                                      'hl':promNivel,
                                      'hq':hq,
                                      'tbn':minTemp,
                                      'tbx':maxTemp,
                                      'tb':promTemp})

    measurements_per_hour["hlx_h"] = measurements_per_hour["hlx_h"]/304.8
    measurements_per_hour["hln_h"] = measurements_per_hour["hln_h"]/304.8
    measurements_per_hour["hl"] = measurements_per_hour["hl"]/304.8
    measurements_per_hour["ht"] = 1
    measurements_per_hour["hn"] = 1
    measurements_per_hour["hlm"] = measurements_per_hour["hlx"]-measurements_per_hour["hln"]

    perdidas = Perdidas(meteorologies_df)

    result = measurements_per_hour.apply(lambda row: perdidas.calcularPerdidaTotal(row), axis=1, result_type="expand")
    measurements_per_hour["lt"] =result[0]
    measurements_per_hour["lw"] = result[1]
    measurements_per_hour["ls"] = result[2]
    measurements_per_hour["tla"] = result[3]
    measurements_per_hour["pva"] = result[4]
    measurements_per_hour["taa"] = result[5]

    measurements_per_hour_json = measurements_per_hour.iloc[:,-6:].to_json(orient='records')

    sumTanque = tank.__dict__
    sumTanque["total_lt"] = measurements_per_hour["lt"].sum()

    sumaPerdidaTanques.append(sumTanque)



    #manda la tabla en formato JSON a la API Reports-service
    #reportService.sendMesaurementsPerHour(measurements_per_hour_json)

    if(lossesOilGas):

        total = pd.merge(measurements_per_hour, pd.DataFrame(lossesOilGas), on='date')

        comparacion = total.loc[:,['date','hl','tb','lt', 'lw', 'ls', 'tla', 'pva', 'taa','lt_oil_gas', 'tla_oil_gas', 'tb_oil_gas', 'hl_oil_gas', 'pva_oil_gas','taa_oil_gas','tanks_id']]

        comparacion['date'] = preprocesingFunctions.toStrFTime(total['date'])

        #tabla para ver los tipos de perdidas por hora
        losses_type = total.loc[:,['date','ls','lw']]

        lt_percent_error = comparacion.apply(lambda row: preprocesingFunctions.getErrorPercent(row["lt_oil_gas"], row["lt"]), axis=1)
        tla_percent_error = comparacion.apply(lambda row: preprocesingFunctions.getErrorPercent(row["tla_oil_gas"], row["tla"]-459.67), axis=1)
        pva_percent_error = comparacion.apply(lambda row: preprocesingFunctions.getErrorPercent(row["pva_oil_gas"], row["pva"]), axis=1)
        taa_percent_error = comparacion.apply(lambda row: preprocesingFunctions.getErrorPercent(row["taa_oil_gas"], row["taa"]-459.67), axis=1)

        lt = comparacion.loc[:,['date','lt','tanks_id']].to_json(orient='records')
        tla = comparacion.loc[:,['date','tla','tanks_id']].to_json(orient='records')
        pva = comparacion.loc[:,['date','pva','tanks_id']].to_json(orient='records')
        taa = comparacion.loc[:,['date','taa','tanks_id']].to_json(orient='records')
        hl = comparacion.loc[:,['date','hl','tanks_id']].to_json(orient='records')
        tb = comparacion.loc[:,['date','tb','tanks_id']].to_json(orient='records')
        
        reportService.sendLt(lt)
        reportService.sendTb(tb)
        reportService.sendHl(hl)
        reportService.sendPva(pva)
        reportService.sendTaa(taa)
        reportService.sendTla(tla)


        percent_errors = pd.DataFrame({
            'date': total['date'],
            'percent_e_Lt':np.round(lt_percent_error,1),
            'percent_e_Tla':np.round(tla_percent_error,1),
            'percent_e_Pva':np.round(tla_percent_error,1),
            'percent_e_Taa':taa_percent_error.round(1)
            })


        percent_errors_json = percent_errors.to_json(orient='records')
        reportService.sendLossesErrorPercent(percent_errors_json)

