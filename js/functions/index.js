// function getCurrentDate() {
//   return new Date().toDateString();
// }

// function getCurrentTime(text, date = getCurrentDate()) {
//   console.log(text + " " + date);
// }
// getCurrentTime("Current Date is:", "17-06-2026");
// getCurrentTime("Current Date is:");


// callback function  

function getCurrentDate() {
  return new Date().toDateString();
}

function getCurrentTime(callback) {
  console.log(callback());
}

getCurrentTime(getCurrentDate);