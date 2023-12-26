import { conditions } from "./weatherConditionsData.js";

function Utils() {
  //Need to determine if night or not
  //If night then use night icons
  //If day use day icons
  const findIconCode = (str) => {
    let condition = conditions.find((condi) => {
      console.log(condi);
      if (condi.day === str || condi.night === str) {
        return condi;
      }
    });
    console.log("findIconCode", conditions);
    return condition.icon;
  };

  const formatTime = (time) => {
    //Grabs the hours.
    let formattedHours = time.substring(11, 13);
    //Because of how the data is displayed, in military and partial military
    //Must check if a colon exists (implies single digit value)''
    if (formattedHours.includes(":")) {
      formattedHours = formattedHours.substring(0, 1);
    }

    if (formattedHours > 12) {
      if (formattedHours === 24) {
        formattedHours = formattedHours - 12;
        time =
          time.substring(0, 10) + " " + formattedHours + time.substring(13);
        return time.concat(" ", "AM");
      }
      formattedHours = formattedHours - 12;
      time = time.substring(0, 10) + " " + formattedHours + time.substring(13);
      return time.concat(" ", "PM");
    } else if (formattedHours < 12) {
      //AM
      return time.concat(" ", "AM");
    } else {
      //Else must be 12PM
      return time.concat(" ", "PM");
    }
  };

  return { findIconCode, formatTime };
}

export { Utils };
