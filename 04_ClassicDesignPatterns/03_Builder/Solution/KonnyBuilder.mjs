import Konny from "../../02_Factory/Solution/Konny.mjs";

class KonnyBuilder {
    constructor(name, age) {
        this.konny = new Konny(name, age);
    }
    contractToArmy() {
        return this.konny.contractToArmy()
    }
    weaponSupply() {
        return this.konny.weaponSupply();
    }
   trainHard() {
       return this.konny.trainHard();
   }
    goToWar() {
        return this.konny;
    }
}

export default KonnyBuilder;
