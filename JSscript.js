setInterval(function() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  
  document.querySelector('#hours').innerHTML = addZero(hours)+ ":";
  document.querySelector('#minutes').innerHTML = addZero(minutes)+ ":";
  document.querySelector('#seconds').innerHTML = addZero(seconds);
}, 1000);

function addZero(num) {
  return (num < 10 ? '0' : '') + num;
}
