import { conditions } from "./weatherConditionsData.js"

function Utils() {
   const findIconCode = (str) => {
       let condition = conditions.find(condi => {
            return condi.day === str ? condi : false;
       })
       return condition.icon;
    }
    return { findIconCode }
}

export { Utils };