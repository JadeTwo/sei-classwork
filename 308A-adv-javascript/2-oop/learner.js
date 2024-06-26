class Learner {
    // private properties (start with #)
    #grades = [];
    #name = {
      first: '',
      last: '',
    }
    #age;
  
    constructor(firstName, lastName, age) {
        this.#name.first = firstName;
        this.#name.last = lastName;
        this.#age = age;
    }

    get name() {
        return this.#name.first + ' ' + this.#name.last
    }

    get age() {
        return this.#age
    }

    // set grades(grade) {
    //     // change to a number if it was a string ("12")
    //     grade = Number(grade)

    //     // only accept grades between 0 and 100
    //     if (grade >= 0 && grade <= 100) {
    //         this.#grades.push(grade)
    //     }
    // }

    // learner1.addGrades(10, [20, 30, 40], 40, 60, 30, 40 ...)

    addGrades(...grades) {
        // rest parameter turns the arguments into an array of values
        // grades -> [10, 30, 40, 60, 30, 40]
        // use flat() method to turns two-dimensional array into one dimensional
        grades = grades.flat();

        // loop over the array of grades
        grades.forEach((grade) => {

        // convert it into a number in case it's a string ("12")
          grade = Number(grade);
    
          // check if it's between 0 and 100
          if (grade >= 0 && grade <= 100) {
            // push grade to private property (grades)
            this.#grades.push(grade);
          }
        });
    }

    get grades() {
        // turn array of grades into a string and return it
        return this.#grades.join(', ')
    }

    get average() {
        // copy the array so that we can manipulate it with sort and shift below
        const arr = [...this.#grades];
        // sort by lowest to highest and remove the lowest grade (with shift)
        arr.sort((a, b) => a - b).shift();
    
        // use reduce to add up all the grades and reduce them to a single value
        // divide that by the length to get the average
        return arr.reduce((a, b) => a + b) / arr.length;
      }
  }

  const learner1 = new Learner('Leeroy', 'Jenkins', 18);

  // as long as we have getter methods, we can access private 
  // properties like age and name with dot notation
  console.log(learner1.name, learner1.age)
  
  // can only use assignment operator on a private property
  // if there's setter method for it (the value 20 will be
  // represented by the parameter grade in the setter)
//   learner1.grades = 20;
//   learner1.grades = 30;
//   learner1.grades = 40;

// accepts unlimited arguments
  learner1.addGrades(20, 30, 40, 60, 10, 20, 30, 50)

  console.log(learner1.grades) // 20, 30, 40

  // access the getter method for average
 console.log(learner1.average)


 class Grades {
    static getAverage(...grades) {
      const arr = [];
  
      grades = grades.flat();
      grades.forEach((grade) => {
        grade = Number(grade);
  
        if (grade >= 0 && grade <= 100) {
          arr.push(grade);
        }
      });
      
      arr.sort((a, b) => a - b).shift();
  
      return arr.reduce((a, b) => a + b) / arr.length;
    }
  }


console.log(Grades.getAverage(50,10,30,40))



class Animal {}
class Cat extends Animal {}
class Tabby extends Cat {}
class SpottedTabby extends Tabby {}

const cat1 = new SpottedTabby();
let object = cat1;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);
