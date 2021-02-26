import { createPlan } from "./plan";
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn} from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from  "./seeds/wheat.js"

export const plantSeeds = () => {
    
    const thePlan = createPlan();
    let plan = [];
    for (let x of thePlan) {
        for (let i of thePlan[x])

            if (i == "Corn") {
                plan.push(createCorn);
            }
            if (i == "Asparagus") {
                plan.push(createAsparagus);
            }
            if (i == "Soybean") {
                plan.push(createSoybean);
            }
            if (i == "Potato") {
                plan.push(createPotato);
            }
            if (i == "Sunflower") {
                plan.push(createSunflower);
            }
            else {
                plan.push(createWheat);
            }
    }
    return plan;
}