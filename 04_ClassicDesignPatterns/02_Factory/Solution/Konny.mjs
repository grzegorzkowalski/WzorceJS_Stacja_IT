import Wojownik from "./Wojownik.mjs";

class Konny extends Wojownik {
    constructor(name, age) {
        super(name, age);
        this.weapon = "lance";
    }
}

export default Konny;
