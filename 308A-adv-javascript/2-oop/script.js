const person = {
    name: {
      first: 'Elyan',
      last: 'Kemble',
    },
    age: 32,
    location: {
      city: 'Garland',
      state: 'Texas',
      zip: 75040
    },
    occupation: 'Front-End Developer',
    introduce() {
        console.log(this);
        console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    }
    // introduce: function () {
    //     console.log(this);
    //     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    // }
}

// console.log(person);

// person.introduce()

// array example
// const arr = new Array(1,2,3); 

class Animal {
    constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes,
        this.legs = legs,
        this.isAwake = isAwake,
        this.isMoving = isMoving
	}

    sleep() {
        this.isAwake = false;
    }

    wake() {
        this.isAwake = true;
    }

    sit() {
        this.isMoving = false;
    }

    walk() {
        this.isMoving = true;
    }

    speak(sound) {
        console.log(sound);
    }

    toString(animal = 'Animal') {
        return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
    }
}


class Cat extends Animal {
    // the special constructor method that creates the object
    // the parameters represent (are placeholders) for the
    // arguments passed during instantiation (ex: new Cat("orange", true, true))
    constructor(fur, isAwake, isMoving) {
     // we pass arguments to super (constructor of parent class) because the
     // Animal constructor expects: eyes, legs, awake (boolean), moving (boolean)
      super(2, 4, isAwake, isMoving);
    // we give the Cat class its own unique property
      this.fur = fur;
    }

    // overriding the speak method inherited from the Animal class
    speak() {
     // call the speak method of the Animal class (using super)
     // and pass it an argument (the sound the animal makes)
      super.speak("Meow...");
    }

    // overriding the toString method inherited from the Object class
    toString() {
      // call the toString method of the Animal class
      // and pass it an argument (the animal type)
      return super.toString("Cat");
    }
}

// creating an instance of the Cat class
const cat3 = new Cat("orange", true, true);

cat3.speak();


class Dog extends Animal {
    constructor(fur, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.fur = fur;
    }
    speak() {
      super.speak("Woof!");
    }
    toString() {
      return super.toString("Dog");
    }
  }
  
  class Cow extends Animal {
    constructor(hair, isAwake, isMoving) {
      super(2, 4, isAwake, isMoving);
      this.hair = hair;
    }
    static speak() {
        console.log('Moo')
    //   super.speak("Moo.");
    }
    toString() {
      return super.toString("Cow");
    }
  }
  

  // instatiate different animals from different classes
  const cat1 = new Cat("Orange", false, false);
  const cat2 = new Cat("Black and White", false, false);
  const dog1 = new Dog("Gold", true, true);
//   const cow1 = new Cow("Brown", true, false);

console.log('cow says: ')
Cow.speak();



cat1.speak();
dog1.speak();
// cow1.speak();

console.log(cat1);

// call the wake method of the inherited Animal class
cat1.wake();

console.log(cat1);

console.log(cat1.toString());
console.log(dog1.toString());
// console.log(cow1.toString());

console.log(cat1.toString());



// inheritance

class Human extends Animal {

    constructor(name, age, occupation, location) {
        super(2, 2, false, false) // eyes, legs, isAwake, isMoving
        this.name = name; 
        this.age = age; // could be moved the Animal class
        this.occupation = occupation;
        this.location = location;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
    }
}

const person1 = new Human({ first: 'Elyan', last: 'Kemble' }, 32, "Front-End Developer", { city: 'Garland', state: 'Texas', zip: 75040 });

console.log(person1);

person1.introduce();




const math = new Math() // no necessary
math.random() // not an instance method