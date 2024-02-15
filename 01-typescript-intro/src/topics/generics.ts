export function whatsMyType<T>(argument:T):T{
    return argument
}

const amIString = whatsMyType<string>('Hola Mundo')
const amINumber = whatsMyType<number>(2)
const amIArray = whatsMyType<number[]>([1,2,3,4,5])

console.log('string:',amIString);
console.log('number:',amINumber);
console.log('array:',amIArray);

