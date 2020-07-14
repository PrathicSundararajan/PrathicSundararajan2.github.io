function sendAlert(){
  alert("Currently working on changing my website. Some cards will lead to my old website!")
}
updatingLineHeight(1);

function test2(){
  console.log('hi');
}

function openTab(tabName) {
  console.log('entering');
  var i, x;
  x = document.getElementsByClassName("rowAll");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  updatingLineHeight(1);
}

function closeTab(tabName){
  console.log('Hi2');
  document.getElementById(tabName).style.display = "none";
  updatingLineHeight(2);
}

function updatingLineHeight(prevAction){ //2 - closedTab 1 - openTab
    var body = document.body,
        html = document.documentElement;
    if (prevAction == 1)
        var height2 = Math.max(body.scrollHeight, body.offsetHeight, html.scrollHeight, html.offsetHeight);
    else if (prevAction == 2)
        var height2 = Math.max(body.scrollHeight, body.offsetHeight);
    var currLines = document.getElementById('mainLines');
    currLines.style.height = height2 + "px";
}
