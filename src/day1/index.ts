import fs from 'fs'

// part 1
const lines = fs
  .readFileSync('/Users/jorgemartin/repo/adventOfCode/aoc24/src/day1/puzzle-input.txt', 'utf8')
  .split('\n')

// Create two lists with the numbers
const listA: number[] = [];
const listB: number[] = [];
lines.map(line => {
  const [a, b] = line.split('  ');
  listA.push(parseInt(a));
  listB.push(parseInt(b));
})

function part1() {
// Sort the lists in ascending order
const sortedListA = listA.sort((a, b) => a - b);
const sortedListB = listB.sort((a, b) => a - b);

// console.log(sortedListA);
// console.log(sortedListB);

// Calculate the result based on the absolute difference
let result = 0;
for (let i = 0; i < sortedListA.length; i++) {
    const item1 = sortedListA[i];
    const item2 = sortedListB[i];
    result += Math.abs(item1 - item2);
}

console.log('part 1', result);
}
part1();

// part 2
function part2() {
    let result = 0;
    listA.map((item) => {
        const timesAppears = listB.filter(itemB => itemB === item).length;
        result += item*timesAppears;
    });
    console.log('part 2', result);
}
part2();
