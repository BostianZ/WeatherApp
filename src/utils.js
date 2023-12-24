import { conditions } from "./weatherConditionsData.js"

function Utils() {

    //Need to determine if night or not
    //If night then use night icons
    //If day use day icons
   const findIconCode = (str) => {
       let condition = conditions.find(condi => {
            return condi.day === str ? condi : false;
       })
       return condition.icon;
    }

    const formatTime = (time) => {
        let formattedTime = time.substring(11, 13)
        console.log(time);
        console.log(formattedTime)
        debugger;
        if (formattedTime.includes(":")) {
            formattedTime = formattedTime.substring(0,1);
        }

        if (formattedTime > 12) {
            //PM
            //-12 to account for military time
            formattedTime = formattedTime - 12
            time = time.substring(0, 10) + " " + formattedTime + time.substring(13);
            return time.concat(" ", "PM");
        } else if(formattedTime < 12) {
            //AM
            return time.concat(" ", "AM")
        }
    }

    return { findIconCode, formatTime }
}

export { Utils };