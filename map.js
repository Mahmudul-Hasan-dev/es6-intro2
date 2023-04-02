const numbers = [2, 3, 4, 5, 6, 7, 78];
// const output = [];
// for (const number of numbers) {
//     const doubled = number * 2;
//     output.push(doubled);
// }

// console.log(output);

//function

function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
console.log(result);

//example3
const numbers2 = [12, 342, 43, 54, 6, 6, 7]
const makedouble = num2 => num2 * 2;

const doubledone = numbers2.map(makedouble);
console.log(doubledone);

//example4
const numbers3 = [23, 43, 32, 21, 32];
const fivetimes = numbers3.map(x => x * 5);
console.log(fivetimes);

//example5
const sixtimes = [2, 3, 1, 4, 56, 6].map(x => x * 6);
console.log(sixtimes);