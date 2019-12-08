export class WebSocketController {

    constructor() {
        // load all
        // obliczanie zasobów zdobytych
    }

    selectBuildngAction(payload: buildingsActions) {
        switch (payload) {
            case buildingsActions.BUY:
                console.log('buy');
                return; // success or fail
            case buildingsActions.HIRE:
                console.log('work');
                return; // success or fail
            case buildingsActions.UPGRADE:
                console.log('upg');
                return; // success or fail
            case buildingsActions.WORK:
                console.log('hire');
                return; // success or fail
            default:
                console.log('no action');
                return; // no action
        }
    }

    destructor() {
        // save all
    }
}

export enum buildingsActions {
    WORK = 'WORK',
    BUY = 'BUY',
    UPGRADE = 'UPGRADE',
    HIRE = 'HIRE',
}


// Only for projects
export interface buildings {
    stoneAge: {
        quarry: number;
        sawmill: number;
        farm: number;
    };
    neolithicAge: {
        hut: number;
        copperMine: number;
        zincMine: number;
    };
    bronzeAge: {
        forge: number;
        house: number;
        storeHouse: number;
    }
    ironAge: {
        ironMine: number;
        goldMine: number;
        silverMine: number;
        mint: number;
    }
    middleAge: {
        steamEngine: number;
        coalMine: number;
        bauxiteMine: number;
    };
    modernAge: {
        oilMine: number;
        oilPowerPlant: number;
        coalPowerPlant: number;
        gasPowerPlant: number;
    };
    atomicAge: {
        waterPowerPlant: number;
        windPowerPlant: number;
        nuclearPowerPlant: number;
        nuclearWasteDump: number;
        plutoniumMine: number;
        uraniumMine: number;
    };
    informationAge: {
        wavePowerPlant: number;
        geothermalPowerPlant: number;
        solarPowerPlant: number;
        fusionPowerPlant: number;
    }
}

export interface resources {
    stoneAge: {
        stone: number;
        wood: number;
        food: number;
    };
    neolithicAge: {
        energy: number;
        people: number;
        copper: number;
        zinc: number;
    };
    bronzeAge: {
        workers: number;
        money: number;
        bronze: number;
    }
    ironAge: {
        iron: number;
        silver: number;
        gold: number;
    }
    middleAges: {
        engineers: number;
        coal: number;
        aluminium: number;
    };
    modernAges: {
        crudeOil: number;
        steel: number;
        electricity: number;
        naturalGas: number;
    };
    atomicAges: {
        nuclearWaste: number;
        plutonium: number;
        uranium: number;
    };
}


