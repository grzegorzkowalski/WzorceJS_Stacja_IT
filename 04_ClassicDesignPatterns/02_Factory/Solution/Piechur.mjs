import Wojownik from "./Wojownik.mjs";

class Piechur extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "sword";
    }
}

export default Piechur;
