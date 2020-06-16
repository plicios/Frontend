function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  function addAlertEvents() {
    Array.prototype.slice.call(document.getElementsByTagName("svg")).forEach(element => {
        element.addEventListener('click', () => {
            alert("Unfortunatelly expand is not working.");
          }, false); 
    })
  }

  function bigImg(x) {
    x.style.width = "100px";
  }
  
  function normalImg(x) {
    x.style.width = "50px";
  }

  startTime()
  addAlertEvents()