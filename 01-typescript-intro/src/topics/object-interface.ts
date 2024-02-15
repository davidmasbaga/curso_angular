let skills: string[]= ['Bash','Counter','Healing']

interface Character {
    name:string;
    hp: number;
    skills:string[];
    hometown:string
}


const strider:Character ={
    name:'Legolas',
    hp:100,
    skills:skills,
    hometown:'Puerto Cruz'

}


console.table(strider)

export { skills, strider}