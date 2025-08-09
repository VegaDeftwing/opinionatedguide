// Stolen from https://codepen.io/electrifried/pen/REjQdM
function scrollPercent() {
  var h = document.documentElement,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight",
      percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100, // ordinarily this calculation should be multiplied by 100, but I've left it at 90 so the rainbow stops around the end of the text block.
      altpercent =  percent + 1;
  return altpercent.toFixed(1);
}

var el = document.querySelectorAll(".container-iri *");
for (i = 0; i < el.length; ++i) {
  var content = el[i].innerHTML;
  el[i].setAttribute("id", "elem" + i);

  if (content !== null) {
    // el[i].setAttribute("data-html",content);

    var node = document.createElement("div");
    node.setAttribute("class", "rainbow");
    node.innerHTML = content;
    el[i].appendChild(node);
  }
}

window.onscroll = function() {
  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset
  };

  var el = document.querySelectorAll(".container-iri *"),
    x = scrollPercent() + "%",
    y = 0;

  for (i = 0; i < el.length; ++i) {
    el[i].style.backgroundPosition = x + " " + y;
    el[i].style.setProperty("--pseudobg-x", x);
    el[i].style.setProperty("--pseudobg-y", 0);
  }
  // console.log(scrollPercent());
};