import Strzelec from "../../02_Factory/Solution/Strzelec.mjs";

class StrzelecBuilder {
    constructor(name, age) {
        this.strzelec = new Strzelec(name, age);
    }
    contractToArmy() {
        return this.strzelec.contractToArmy()
    }
    weaponSupply() {
        return this.strzelec.weaponSupply();
    }
   trainHard() {
       return this.strzelec.trainHard();
   }
    goToWar() {
        return this.strzelec;
    }
}

export default StrzelecBuilder;
