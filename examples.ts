//Arrow function
const add = (a: number, b: number): number => { return a + b }
const result = add(10, 20)
console.log(result)


//Class inheritance
//Case 1
console.log("Case 1")
class Animal {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak(): void {             // override parent method
    console.log(`${this.name} barks!`);
  }

    fetch(): void {            // Dog-only method
    console.log("Fetching...");
  }
}

const d = new Dog("Bruno");
d.speak();  // Bruno barks!
d.fetch();  // Fetching...

//Case 2
console.log("Case 2")
class Animal2 {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog2 extends Animal2 {
  speak(): void {   
    super.speak()
    console.log(`${this.name} barks!`);
  }

    fetch(): void {            // Dog-only method
    console.log("Fetching...");
  }
}

const d2 = new Dog2("Bruno");
d2.speak();  


//Case 3
console.log("Case 3")
class Animal3 {
  constructor(public name: string) {}

  speak(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog3 extends Animal3 {
  speak(): void {            
    console.log(`${this.name} barks!`);
  }

    fetch(): void {            // Dog-only method
    console.log("Fetching...");
  }
}

const d3 = new Dog3("Bruno");
Animal.prototype.speak.call(d3);// parent speak() alone called
