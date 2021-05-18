let dataDelivery = document.querySelector('.pay__date-delivery');

let dayDelivery = document.querySelector('#day-delivery');
let monthDelivery = document.querySelector('#month-delivery');
let yearDelivery = document.querySelector('#year-delivery');

let previousDay;

let date = new Date();
let dateMilisec = Date.parse(date);

let nowYear = date.getFullYear();
let nowMonth = date.getMonth();
let nowDay = date.getDate();

let interval = 1000*60*60*24*30*12*1;

let newDate = dateMilisec+interval;

let newAllDate = new Date(newDate);

let newYear = newAllDate.getFullYear();
let newMonth = newAllDate.getMonth();
let newDay = newAllDate.getDate();

let intervalYears = newYear - nowYear;

let dayNum;
let numMonth;

let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

addYears();
addMonths();
dayOnMonthYear(monthDelivery.value);
addDays();

function addYears() {
  for(let i = 0; i <= intervalYears; i++) {
    let option = document.createElement('option'); 
    option.textContent = nowYear+i;
    yearDelivery.appendChild(option);
  }
}

function addDays(){
  if(yearDelivery.value == nowYear){
    if(nowYear != newYear){
      if(numMonth == nowMonth){
        for(let j = nowDay; j <= dayNum; j++) {
          addDayPage(j);
        }
      } else {
        for(let j = 1; j <= dayNum; j++) {
          addDayPage(j);
        }
      }
    } else if (nowYear == newYear){
      if(numMonth == nowMonth){
        for(let j = dayNum; j <= dayNum; j++) {
          addDayPage(j);
        }
      } else if(numMonth == newMonth) {
        for(let j = 1; j <= newDay; j++){
          addDayPage(j);
        }
      } else {
        for(let j = 1; j <= dayNum; j++){
          addDayPage(j);
        }
      }
    }
  } else if(yearDelivery.value == newYear){
    if(numMonth == newMonth){
      for(let j = 1; j <= newDay; j++){
        addDayPage(j);
      }
    } else {
      for(let j = 1; j <= dayNum; j++){
        addDayPage(j);
      }
    }
  } else {
    for(let j = 1; j <= dayNum; j++){
      addDayPage(j);
    }
  }
}

function addMonths() {
  deleteData(monthDelivery);

  if(yearDelivery.value == nowYear){
    if(nowYear != newYear){
      for(let i = nowMonth; i < months.length; i++){
        addMonthPage(i);       
      }
    } else if (nowYear == newYear){
      for(let i = nowMonth; i <= newMonth; i++){
        addMonthPage(i);
      }
    }
  } else if(yearDelivery.value == newYear) {
    for(let i = 0; i <= newMonth; i++){
      addMonthPage(i);
    }
  } else {
    for(let i = 0; i < months.length; i++){
      addMonthPage(i);
    }
  }
}

function addDayPage(j){
  let option = document.createElement('option');
  option.textContent = j;
  dayDelivery.appendChild(option);
}

function addMonthPage(i){
  let addChildMonth = document.createElement('option'); 
  addChildMonth.textContent = months[i];
  monthDelivery.appendChild(addChildMonth);
}

function dayOnMonthYear(month) {
  deleteData(dayDelivery);

  if(month === 'January'){
      dayNum = 31;
      numMonth = 0;
  } else if (month === 'March'){
      dayNum = 31;
      numMonth = 2;
  } else if (month === 'April'){
      dayNum = 30;
      numMonth = 3;
  } else if (month === 'May'){
      dayNum = 31;
      numMonth = 4;
  } else if (month === 'June'){
      dayNum = 30;
      numMonth = 5;
  } else if (month === 'July'){
      dayNum = 31;
      numMonth = 6;
  } else if (month === 'August'){
      dayNum = 31;
      numMonth = 7;
  } else if (month === 'September'){
      dayNum = 30;
      numMonth = 8;
  } else if (month === 'October'){
      dayNum = 31;
      numMonth = 9;
  } else if (month === 'November'){
      dayNum = 30;
      numMonth = 10;
  } else if (month === 'December'){
      dayNum = 31;
      numMonth = 11;
  } else {
      let year = yearDelivery.value;
    let leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    dayNum = leap ? 29 : 28;
    numMonth = 2;
  }

  if(previousDay) {
    dayDelivery.value = previousDay;

    if(dayDelivery.value === "") {
      dayDelivery.value = previousDay - 1;
    }

    if(dayDelivery.value === "") {
      dayDelivery.value = previousDay - 2;
    }

    if(dayDelivery.value === "") {
      dayDelivery.value = previousDay - 3;
    }
  }
}

function deleteData(select){
  while(select.firstChild){
    select.removeChild(select.firstChild);
  }
}

yearDelivery.onchange = function() {
  dayOnMonthYear(monthDelivery.value);
  addMonths();
  addDays();
}

monthDelivery.onchange = function() {
  dayOnMonthYear(monthDelivery.value);
  addDays();
}

dayDelivery.onchange = function() {
  previousDay = dayDelivery.value;
}