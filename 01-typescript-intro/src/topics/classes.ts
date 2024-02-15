export class Person {
  constructor(public name: string, private address?: string) {
    this.name = name;
    this.address = address;
    this.sayHello();
  }

  sayHello() {
    return "Hello " + this.name + ", you are living in " + this.address;
  }
}

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public color: string,
//     public realName:string
//   ) {
//     super(realName, 'New York');
//   }
// }



export class Hero  {


    constructor(
      public alterEgo: string,
      public age: number,
      public color: string,
      public realName:string,
      public person: Person
    ) {
      
    }
  }

const tony = new Person("Tony Stark", "Barcelona");
const ironman = new Hero("Ironman", 45, "Red", 'Tony Stark', tony);

console.log(ironman);
