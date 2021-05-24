export const stringifyTime = ({ hour, minute }) => {
  // grabbed this from https://stackoverflow.com/questions/29206453/best-way-to-convert-military-time-to-standard-time-in-javascript
  let time = `${hour}:${minute}`; // your input

  time = time.split(':'); // convert to array

  // fetch
  const hours = Number(time[0]);
  const minutes = Number(time[1]);

  // calculate
  let timeValue;

  if (hours > 0 && hours <= 12) {
    timeValue = "" + hours;
  } else if (hours > 12) {
    timeValue = "" + (hours - 12);
  } else if (hours === 0) {
    timeValue = "12";
  }

  timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
  timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

  // show
  return timeValue
}

const monthNames = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
}

export const stringifyDate = ({ year, month, day }) => {
  let dayWithSuffix;
  // taken from https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number
  let j = day % 10,
    k = day % 100;
  if (j === 1 && k !== 11) {
    dayWithSuffix = day + "st";
  }
  else if (j === 2 && k !== 12) {
    dayWithSuffix = day + "nd";
  }
  else if (j === 3 && k !== 13) {
    dayWithSuffix = day + "rd";
  }
  else {
    dayWithSuffix = day + "th";
  }

  return `${monthNames[month - 1]} ${dayWithSuffix}, ${year}`
}
