const fantasticArmy = [
    {race: "Elf", name: "Ravalee", age: 150, speed: 100},
    {race: "Orc", name: "Xugarf", age: 34, speed: 80},
    {race: "Orc", name: "Uram", age: 55, speed: 75},
    {race: "Dwarf", name: "Grumpy", age: 111,  speed: 65},
    {race: "Elf", name: "Keykalyn", age: 222, speed: 120},
    {race: "Elf", name: "Oririe", age: 330, speed: 150}];

const result = fantasticArmy
                .filter(el => el.race === "Elf")
                .map(el => ({
                     ...el,
                     speed: el.speed + 10
                    }))
                .reduce((prev, cur) => prev + cur.age, 0)

console.log(result);