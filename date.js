const day = document.querySelector('.day'),
      month = document.querySelector('.month'),
      year = document.querySelector('.year');

let date = new Date();
const d = date.getDate(),
      m = date.getMonth() + 1,
      y = date.getFullYear();
// console.log(d, m, y);

if(d < 10) {
    day.textContent = "0"+d;
} else {
    day.textContent = d;
}

if(m < 10) {
    month.textContent = "0"+m;
} else {
    month.textContent = m;
}

year.textContent = y;