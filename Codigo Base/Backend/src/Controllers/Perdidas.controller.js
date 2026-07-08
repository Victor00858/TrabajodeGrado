const Perds = require('../Models/Perdidas');
const CTanks = require('../Models/CTanks');
const meteo = require('../Models/Meteo');
const Htank = require('../Models/HTanks');
const sustan = require('../Models/Sustancias');

const PerCtrl = {};

//Llamo valores desde la base de datos
//Caracteristicas de tanque

PerCtrl.getCVariables = async () => {
    try {
        const tank = await CTanks.findOne({ idTank: 'Tanque_1' });
        if (!tank) {
            console.log('Tank not found');
            return;
        }
        // Accede a las variables dentro del documento
        const aislado = tank.aislado;
        const color = tank.color;
        const estado = tank.estado;
        const PC = tank.PC;
        const sr = tank.sr;
        const D = tank.D;
        const gnx = tank.gnx;
        const gnn = tank.gnn;
        const TC = tank.TC;
        const Hs = tank.Hs;
        const PR = tank.PR;
        const alfa = tank.alfa;
        const Hro = tank.Hro;

        // Retorna las variables como un objeto
        return {
            aislado, color, estado, PC, sr, D, gnx, gnn, TC, Hs, PR, alfa, Hro
        };
    } catch (err) {
        console.log(err);
        return;
    }
};

//----------------------------------------------------------------------------------------------------
// Historicos de tanque en hora 1

/* PerCtrl.getHVariables = async () => {
    try {
        const idTank = 'Tanque_1';
        const fecha = 'Dia 1';

        const htank = await Htank.findOne({ idTank: idTank, fecha: fecha }).exec();

        if (htank && htank.horas) {
            const { hn, ge, ht } = htank.horas;
            const data = { hn, ge, ht };
            for (const hora in htank.horas) {
                if (hora.startsWith("hora_")) {
                    const { Hlxp, Hlnp, tbx, tbn, Q, Pbx, Pbn } = htank.horas[hora];
                    data[hora] = { Hlxp, Hlnp, tbx, tbn, Q, Pbx, Pbn };
                }
            }
            return data;
        }
    } catch (err) {
        console.log(err);
        return;
    }
}; */


 PerCtrl.getHVariables = async () => {
    try {
        const idTank = 'Tanque_1';
        const fecha = 'Dia 1';

        const htank = await Htank.findOne({ idTank: idTank, fecha: fecha }).exec();

        if (htank && htank.horas) {
            const { hn, ge, ht, hora_1 } = htank.horas;
            const Hlxp = hora_1?.Hlxp;
            const Hlnp = hora_1?.Hlnp;
            const tbx = hora_1?.tbx;
            const tbn = hora_1?.tbn;
            const Q = hora_1?.Q;
            const Pbx = hora_1?.Pbx;
            const Pbn = hora_1?.Pbn;

            return {
                hn, ge, ht, Hlxp, Hlnp, tbx, tbn, Q, Pbx, Pbn
            };
        }
    } catch (err) {
        console.log(err);
        return;
    }
}; 

//-------------------------------------------------------------------------------------------------------
//Datos Meteorologicos

PerCtrl.getMVariables = async () => {
    try {
        const Meteo = await meteo.findOne({ mes: 'Enero' });
        if (!Meteo) {
            console.log('month not found');
            return;
        }
        const In = Meteo.In;
        const tmax = Meteo.tmax;
        const tmin = Meteo.tmin;

        return {
            In, tmax, tmin
        };
    } catch (err) {
        console.log(err);
        return;
    }
};

//-------------------------------------------------------------------------------------------------------
//Datos sustancia almacenada

PerCtrl.getSVariables = async () => {
    try {
        const ST = await sustan.findOne({ ST: 'Fuel Oil #2' });
        if (!ST) {
            console.log('la sustancia no existe');
            return;
        }
        const Mv = ST.Mv;
        const Ml = ST.Ml;
        const A = ST.A;
        const B = ST.B;
        const Kc = ST.Kc;

        return {
            Mv, Ml, A, B, Kc
        };
    } catch (err) {
        console.log(err);
        return;
    }
};

PerCtrl.getPerdidas = async () => {
    try {
        const idTank = 'Tanque_1';
        const fecha = 'Dia 1';

        const perdida = await Perds.findOne({ idTank: idTank, fecha: fecha }).exec();

        if (perdida && perdida.horas) {
            const { Ls, Lw, Lt } = perdida.horas.hora_1;
            return {
                Ls, Lw, Lt
            };
        } else {
            return {}
        }
    } catch (err) {
        console.log(err);
        return;
    }
};
//-------------------------------------------------------------------------------------------------------
//Function Main()

async function Main() {
    const tankVariables = await PerCtrl.getCVariables();

    //variables globales
    var aislado = tankVariables.aislado;
    var color = tankVariables.color;
    var estado = tankVariables.estado;
    var PC = tankVariables.PC;
    var sr = tankVariables.sr;
    var D = tankVariables.D;
    var gnx = tankVariables.gnx;
    var gnn = tankVariables.gnn;
    var TC = tankVariables.TC;
    var Hs = tankVariables.Hs;
    var PR = tankVariables.PR;
    var alfa = tankVariables.alfa;
    var Hro = tankVariables.Hro;

    const tankHistoricos = await PerCtrl.getHVariables();

    //variables globales
    var Hn = tankHistoricos.hn;
    var Ge = tankHistoricos.ge;
    var Ht = tankHistoricos.ht;
    var Hlpx = tankHistoricos.Hlxp;
    var Hlpn = tankHistoricos.Hlnp;
    var tbx = tankHistoricos.tbx;
    var tbn = tankHistoricos.tbn;
    var Q = tankHistoricos.Q;
    var Pbx = tankHistoricos.Pbx;
    var Pbn = tankHistoricos.Pbn;

    const meteorologia = await PerCtrl.getMVariables();

    //variables globales
    var In = meteorologia.In;
    var tmax = meteorologia.tmax;
    var tmin = meteorologia.tmin;

    const Sustancias = await PerCtrl.getSVariables();

    //variables globales
    var Mv = Sustancias.Mv;
    var Ml = Sustancias.Ml;
    var A = Sustancias.A;
    var B = Sustancias.B;
    var Kc = Sustancias.Kc;

    //Ecuaciones Base
    const Pa = 14.7;
    const R = 10.731;
    tax = tmax + 459.67;
    tan = tmin + 459.67;
    taa = Math.round((tax + tan) / 2);

    //Funciones

    function AlturaProm_Hl(Hs, Hn, Hlpx, Hlpn, Ge, gnx, gnn) {
        let Hl;
        if (Hn) {
            Hl = (Hlpx + Hlpn) / 2;
        } else if (Ge) {
            Hl = (gnx + gnn) / 2;
        } else {
            Hl = Hs / 2;
        }
        return Hl;
    };

    Hl = AlturaProm_Hl(Hs, Hn, Hlpx, Hlpn, Ge, gnx, gnn);

    function DeltaPb(TC, PR, Pbx, Pbn, Hp) {
        let DPb;
        if (TC) {
            DPb = 0;
        } else {
            if (PR) {
                DPb = Pbx - Pbn;
            } else {
                DPb = 0.06;
            }
        }
        return DPb;
    }

    DPb = DeltaPb(TC, PR, Pbx, Pbn);

    function Po(PR, Pbx, Pbn) {
        let Po;
        if (PR) {
            Po = (Pbx + Pbn) / 2;
        } else {
            Po = 0;
        }
        return Po;
    };

    Po = Po(PR, Pbx, Pbn);

    function Pbxi(PR, Pbx) {
        let Pbxi;
        if (PR) {
            Pbxi = Pbx;
        } else {
            Pbxi = 0.03;
        }
        return Pbxi;
    }

    Pbxi = Pbxi(PR, Pbx);

    function resta_Hl(Hn, Hlpx, Hlpn, gnx, gnn) {
        let Hlm;
        if (Hn) {
            Hlm = (Hlpx - Hlpn);
        } else {
            Hlm = (gnx - gnn);
        }
        return Hlm;
    };

    Hlm = resta_Hl(Hn, Hlpx, Hlpn, gnx, gnn);

    function PerdPerm_Ls(aislado, Ht, tbx, tbn, taa, alfa, In, A, B, tmax, tmin, R, Pa, Mv, Hl, DPb, Hs, Hro, D) {
        let Ls;
        if (aislado) {
            function TempLiq_Tb(Ht, tbx, tbn) {
                let Tb;
                if (Ht) {
                    Tb = (tbx + tbn) / 2;
                } else {
                    Tb = null;
                }
                return Tb;
            }

            function Factor_Ke(DTv, tbx, tbn, A, B, Tla, DPb, Pva, Pa) {
                let Kei;
                Tln = tbn;
                Tlx = tbx;
                Pvn = Math.exp(A - B / Tln);
                Pvx = Math.exp(A - B / Tlx);
                DPv = Pvx - Pvn;
                Ke = (DTv / Tla) + (DPv - DPb) / (Pa - Pva);
                if (Ke < 0) {
                    Kei = 0;
                } else if (Ke > 1) {
                    Kei = 1;
                } else {
                    Kei = Ke;
                }
                return Kei;
            }

            Ke = Factor_Ke(DTv, tbx, tbn, A, B, Tla, DPb, Pva, Pa);
            Tb = TempLiq_Tb(Ht, tbx, tbn);
            Tla = Tb;
            Tv = Tb;
            DTv = tbx - tbn;
            Pva = Math.exp(A - B / Tla);
            Hvo = Hs - Hl + Hro;
            Ks = 1 / (1 + 0.053 * Pva * Hvo);
            Wv = (Mv * Pva) / (R * Tv);
            Ls = Nhc * Hvo * Ks * Ke * Wv;

        } else {
            function TempLiq_Tb(Ht, tbx, tbn, taa, alfa, In) {
                let Tb;
                if (Ht) {
                    Tb = (tbx + tbn) / 2;
                } else {
                    Tb = taa + 0.003 * alfa * In;
                }
                return Tb;
            }

            function Factor_Ke(Pva, DPb, DTv, Tla, A, B, Pa) {
                let Kei;
                if (Pva <= 0.1 && DPb <= 0.063) {
                    Kei = 0.0018 * DTv;
                } else {
                    Tln = Tla - 0.25 * DTv;
                    Tlx = Tla + 0.25 * DTv;
                    Pvn = A - B / Tln;
                    Pvx = A - B / Tlx;
                    DPv = Pvx - Pvn;
                    Ke = (DTv / Tla) + (DPv - DPb) / (Pa - Pva);

                    if (Ke < 0) {
                        Kei = 0;
                    } else if (Ke > 1) {
                        Kei = 1;
                    } else {
                        Kei = Ke;
                    }
                }
                return Kei;
            }

            Tb = TempLiq_Tb(Ht, tbx, tbn, taa, alfa, In);
            Tla = 0.4 * taa + 0.6 * Tb + 0.005 * alfa * In;
            Tv = 0.7 * taa + 0.3 * Tb + 0.009 * alfa * In;
            DTv = 0.7 * (tmax - tmin) + 0.02 * alfa * In;
            Hvo = Hs - Hl + Hro;
            Pva = (Math.exp(A - B / Tla));
            Ke = Factor_Ke(Pva, DPb, DTv, Tla, A, B, Pa);
            Ks = 1 / (1 + 0.053 * Pva * Hvo);
            Wv = (Mv * Pva) / (R * Tv);
            pi = Math.PI;
            Ls = 365 * (pi * (Math.pow(D, 2)) / 4) * Hvo * Ks * Ke * Wv;
        }
        return Ls;
    }

    Ls = PerdPerm_Ls(aislado, Ht, tbx, tbn, taa, alfa, In, A, B, tmax, tmin, R, Pa, Mv, Hl, DPb, Hs, Hro, D);

    function PerdTra_Lw(aislado, Ht, tbx, tbn, taa, alfa, In, A, B, Mv, R, Q, D, Hlm, DPb, Po, Pbxi, Pa, Kc) {
        let Lw;
        if (aislado) {
            function TempLiq_Tb(Ht, tbx, tbn) {
                let Tb;
                if (Ht) {
                    Tb = (tbx + tbn) / 2;
                } else {
                    Tb = null;
                }
                return Tb;
            }
            function Kn(N) {
                let Kn;
                if (N <= 36) {
                    Kn = 1;
                } else {
                    Kn = (180 + N) / (6 * N);
                }
                return Kn;
            }

            function AjsVen_Kb(DPb, Po, Pbxi, Pa, Kn, Pva) {
                let Kb;
                if (-0.03 < DPb <= 0.03) {
                    Kb = 1;
                } else {
                    Kbp = Kn * (Pbxi + Pa) / (Po + Pa);
                    if (Kbp <= 1) {
                        Kb = 1;
                    } else {
                        Kb = (((Po + Pa) / Kn) - Pva) / (Pbxi + Pa - Pva);
                    }
                }
                return Kb;
            }

            Tb = TempLiq_Tb(Ht, tbx, tbn);
            Tla = Tb;
            Pva = (Math.exp(A - B / Tla));
            Tv = Tb;
            Wv = (Mv * Pva) / (R * Tv);
            pi = Math.PI;
            Vq = 5.614 * Q;
            N = Vq / (pi * (Math.pow(D, 2)) * Hlm / 4);
            Kn = Kn(N);
            Kb = AjsVen_Kb(DPb, Po, Pbxi, Pa, Kn, Pva);
            Lw = Vq * Kn * Kc * Kb * Wv;

        } else {
            function TempLiq_Tb(Ht, tbx, tbn, taa, alfa, In) {
                let Tb;
                if (Ht) {
                    Tb = (tbx + tbn) / 2;
                } else {
                    Tb = taa + 0.003 * alfa * In;
                }
                return Tb;
            }

            function Kn(N) {
                let Kn;
                if (N <= 36) {
                    Kn = 1;
                } else {
                    Kn = (180 + N) / (6 * N);
                }
                return Kn;
            }

            function AjsVen_Kb(DPb, Po, Pbxi, Pa, Kn, Pva) {
                let Kb;
                if (-0.03 < DPb <= 0.03) {
                    Kb = 1;
                } else {
                    Kbp = Kn * (Pbxi + Pa) / (Po + Pa);
                    if (Kbp <= 1) {
                        Kb = 1;
                    } else {
                        Kb = (((Po + Pa) / Kn) - Pva) / (Pbxi + Pa - Pva);
                    }
                }
                return Kb;
            }

            Tb = TempLiq_Tb(Ht, tbx, tbn, taa, alfa, In);
            Tla = 0.4 * taa + 0.6 * Tb + 0.005 * alfa * In;
            Pva = (Math.exp(A - B / Tla));
            Tv = 0.7 * taa + 0.3 * Tb + 0.009 * alfa * In;
            Wv = (Mv * Pva) / (R * Tv);
            pi = Math.PI;
            Vq = 5.614 * Q;
            N = Vq / (pi * (Math.pow(D, 2)) * Hlm / 4);
            Kn = Kn(N);
            Kb = AjsVen_Kb(DPb, Po, Pbxi, Pa, Kn, Pva);
            Lw = Vq * Kn * Kc * Kb * Wv;

        }
        return Lw;
    };

    Lw = PerdTra_Lw(aislado, Ht, tbx, tbn, taa, alfa, In, A, B, Mv, R, Q, D, Hlm, DPb, Po, Pbxi, Pa, Kc);
    Lt = Ls + Lw;
    console.log(Lt);

    const PerdsCal = async () => {
        const resultado = await Htank.aggregate([
            {
                $project: {
                    _id: 1,
                    idTank: 1,
                    fecha: 1,
                    "horas.hora_1": 1 // Seleccionamos solo los campos necesarios para calcular Ls, Lw, y Lt
                }

            },
            {
                $addFields: {
                    "horas.hora_1.Ls": { $literal: Ls },
                    "horas.hora_1.Lw": { $literal: Lw },
                    "horas.hora_1.Lt": { $literal: Lt }
                }
            },
            {
                $project: {
                    _id: 1,
                    idTank: 1,
                    fecha: 1,
                    horas: {
                        hora_1: {
                            Ls: "$horas.hora_1.Ls",
                            Lw: "$horas.hora_1.Lw",
                            Lt: "$horas.hora_1.Lt"
                        }
                    }
                }
            }

        ])

        resultado.forEach(async (doc) => {
            const perdida = new Perds(doc);
            await perdida.save();
        });
    }
     /*(async () => {
        try {
            await PerdsCal();
            console.log('Se ha calculado y guardado la información de pérdidas');
        } catch (error) {
            console.error('Error al calcular y guardar la información de pérdidas:', error);
        }
    })();*/

}

Main();


module.exports = PerCtrl;

