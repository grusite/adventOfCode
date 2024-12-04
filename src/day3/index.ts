import fs from 'fs'

const lines = fs
  // .readFileSync('/Users/jorgemartin/repo/adventOfCode/aoc24/src/day3/puzzle-example-part2.txt', 'utf8')
  .readFileSync('/Users/jorgemartin/repo/adventOfCode/aoc24/src/day3/puzzle-input.txt', 'utf8')
// .split('\n')

console.log(lines)

function getMultiplicationMatchesPutiplied(text: string): number {
  const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g
  const allMatches = Array.from(text.matchAll(pattern))
  let multSum = 0
  allMatches.forEach((match) => {
    multSum += parseInt(match[1]) * parseInt(match[2])
  })
  return multSum
}

function part1() {
  const program = lines
  const multSum = getMultiplicationMatchesPutiplied(program)
  return multSum
}
console.log('part1', part1())

function part2() {
  const program = lines
  let multSum = 0
  const betweenDonts = program.split("don't()")
  // The string always start enabled
  multSum += getMultiplicationMatchesPutiplied(betweenDonts[0])

  for (let index = 1; index < betweenDonts.length; index++) {
    const doMatches = betweenDonts[index].split('do()')
    // Beteen don'ts we sum that is at the right of the last do()
    multSum += getMultiplicationMatchesPutiplied(doMatches.slice(1).join(''))
  }
  return multSum
}
console.log('part2', part2())
