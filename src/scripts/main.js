console.log("Welcome to the main module")

import { createPlan } from "./plan.js";

const yearlyPlan = createPlan();

console.log("Yearly Plan", yearlyPlan)

// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

import { addPlant, usePlants } from "./field.js"

const seed = addPlant(yearlyPlan);
const plant = usePlants();
console.log(plant)