import fs from 'fs'

const lines = fs
  .readFileSync('/Users/jorgemartin/repo/adventOfCode/aoc24/src/day2/puzzle-example.txt', 'utf8')
  // .readFileSync('/Users/jorgemartin/repo/adventOfCode/aoc24/src/day2/puzzle-input.txt', 'utf8')
  .split('\n')

console.log(lines);

function validDifferenceBetweenLevels(levelA: number, levelB: number, min: number, max: number): boolean {
  if (Math.abs(levelA - levelB) >= min && Math.abs(levelA - levelB) <= max) return true
  return false;
}

enum Directions {
  Decreasing = 'desc',
  Increasing = 'asc'
}
function leveldirection(levelA: number, levelB: number): Directions | null {
  if (levelA > levelB) return Directions.Decreasing
  else if (levelA < levelB) return Directions.Increasing
  return null;
}

function isSequenceValid(levels: number[]): boolean {
  if (levels.length < 2) return true

  const direction = leveldirection(levels[0], levels[1])
  if (!direction) return false

  for (let i = 0; i < levels.length - 1; i++) {
    if (
      leveldirection(levels[i], levels[i + 1]) !== direction ||
      !validDifferenceBetweenLevels(levels[i], levels[i + 1], 1, 3)
    ) {
      return false
    }
  }

  return true
}

function part1() {
  let safeCount = 0;
  const reports = lines;
  reports.forEach(report => {
    const levels = report.split(' ').map(Number);
    if (isSequenceValid(levels)) {
      safeCount++;
      return;
    }
  })
  return safeCount;
}
console.log("part1 success count", part1());

function part2() {
  let safeCount = 0;
  const reports = lines;
  reports.forEach(report => {
    const levels = report.split(' ').map(Number)
    // First check if it's already safe without removing anything
    if (isSequenceValid(levels)) {
      safeCount++
      return
    }

    // Try removing each number one at a time
    for (let i = 0; i < levels.length; i++) {
      const testLevels = [...levels.slice(0, i), ...levels.slice(i + 1)]
      if (isSequenceValid(testLevels)) {
        safeCount++
        break
      }
    }
  })
  return safeCount
}
console.log("part2 success count", part2());
