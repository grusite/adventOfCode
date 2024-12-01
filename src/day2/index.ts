import fs from 'fs'

// part 1
const lines = fs
  .readFileSync('/Users/jorgemartin/repo/adventOfCode/aoc24/src/day2/puzzle-input.txt', 'utf8')
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
}
part1();

// part 2
function part2() {
  
}
part2();
