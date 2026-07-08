import Tank from "../models/tanks.model";


export class TankService
{

    public static async getTanks()
    {
        try {
            
            const data = await Tank.findAll(
                {
                    attributes:['id','name',['isolated','isIsolated'],['d','diameter'],['hro','spaceTank'],['alfa','alpha'],['hs','tankHeight'],['hnx','hlx'],['hnn','hln'], 'pr', 'ge','tc','hro','hs']
                }
            )
            return data;

        } catch (error) {
            throw new Error('No se encontraron datos');
        }
    }
}