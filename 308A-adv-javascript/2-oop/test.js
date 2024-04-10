class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
    }
}

class Adventurer extends Character {
    constructor(name, role) {
        super(name);
        this.role = role;
        // this.inventory.push("bedroll")
    }
}

let character = new Character()
let adventurer = new Adventurer("bob", "archer")

console.log(character)
console.log(adventurer)