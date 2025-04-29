const {format, addDays, subDays} = require("date-fns");

const now = new Date();
console.log("Today is: ", format(now, "dd-MMM-yyyy"));

const nextWeek = addDays(now, 7);
console.log("Next week: ", format(nextWeek, "dd-MMM-yyyy"));

const previousWeek = subDays(now, 7);
console.log("Previous week: ", format(previousWeek, "dd-MMM-yyyy"));
