import PiechurBuilder from "./Solution/PiechurBuilder.mjs";
import StrzelecBuilder from "./Solution/StrzelecBuilder.mjs";
import KonnyBuilder from "./Solution/KonnyBuilder.mjs";
import Garnizon from "./Solution/Garnizon.mjs";

let piechurBuilder = new PiechurBuilder("Tomasz", 34);
let strzelecBuilder = new StrzelecBuilder("Jan", 22);
let konnyBuilder = new KonnyBuilder("Mikołaj", 30);
let garnizon = new Garnizon(piechurBuilder);
const piechur = garnizon.recrutTraining();
console.log(piechur);

const garnizonStrzelec = new Garnizon(strzelecBuilder);
const strzelec = garnizonStrzelec.recrutTraining();
console.log(strzelec);

