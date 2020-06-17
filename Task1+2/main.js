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

  function bigImg(x) {
    x.style.width = "100px";
  }
  
  function normalImg(x) {
    x.style.width = "50px";
  }

  startTime()

function doScrolling(elementY, duration) { 
  var startingY = window.pageYOffset;
  var diff = elementY - startingY;
  var start;

  console.log(startingY)
  console.log(elementY)
  console.log(diff)

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    var time = timestamp - start;
    var percent = Math.min(time / duration, 1);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  })
}

function addHrefListeners() {
  Array.prototype.slice.call(document.getElementsByTagName("a")).forEach(element => {
    element.addEventListener('click', () => {
        var targetId = element.getAttribute("href").substring(1)
        console.log(targetId)
        var targetElement = document.getElementById(targetId)
        doScrolling(targetElement.getBoundingClientRect().top + window.scrollY, 500)
      }, false); 
})
}


addHrefListeners()