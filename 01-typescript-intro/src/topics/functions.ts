// function sumNumber(a: number, b: number) {
//   return a + b;
// }

// const restNumber = (a: number, b: number) => {
//   return `${a - b}`;
// };

// const multiplyNumber = (a: number, b: number) => {
//   return a * b;
// };

// const resultSuma=  sumNumber(2,5)

// const resultResta=  restNumber(2,5)

// const resultMultiply=  multiplyNumber(2,5)

// console.log({resultSuma,resultResta, resultMultiply})


interface Character {
    name:string;
    hp:number;
    showHp: ()=> void
}

const healCharacter = (character:Character, amount:number ) =>{
    
    character.hp += amount

}


const strider:Character = {
    name:'Strider',
    hp:50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    }

}
healCharacter(strider, -30)
strider.showHp();


export {};
