window.onload = function() {
  var lang = (navigator.userLanguage || navigator.language).substr(0,2);
  if (lang == "fr") {
    document.getElementsByTagName('body')[0].innerHTML = 'Entrez vos coordonnées X: <input type="number" id="x"><br>Entrer vos coordonnées Z: <input type="number" id="z"><br>Entrer vos coordonnées X de destination: <input type="number" id="dx"><br>Entrez vos coordonnées Z de destination: <input type="number" id="dz"><br><button onclick="calc()">Estimer</button><p id="result"></p>';
    window.st = ["Pour vous rendre à cette destination, vous allez devoir vous orienter à "," degrés puis parcourir "," blocs."];
  } else {
    window.st = ["To get to this destination, you will have to orient yourself by "," degrees and then go through "," blocks."];
  }
}
function calc() {
  //Here, we get all the input element from the index.htm file
  var x = Number(document.getElementById('x').value);
  var z = Number(document.getElementById('z').value);
  var dx = Number(document.getElementById('dx').value);
  var dz = Number(document.getElementById('dz').value);
  //Then we will calculate the distance between the coords of the client and the destination of the client by the Pythagorician theorem
  var r = Math.round(Math.hypot(dx-x,dz-z)); //Math.hypot(x,y) is Math.sqrt(x^2, y^2). This is a shortcut
  //Here, we will calculate the value of the angle from which the client will have to orientate himself to reach his destination. This functions returns radians. So, we convert the radian result to degrees.
  var df = Math.abs(Math.atan((dx-x)/(dz-z))*(180/Math.PI));
  //This is some code to ajust this value to Minecraft
  if (dx < x && dz < z) {
    df = 180-df;
  }
  if (dx > x && dz < z) {
    df = -180+df;
  }
  if (dx > x && dz > z) {
    df = 0-df;
  }
  //Finally, we will show the message to the client, we round up the value of the angle to 1/10th
  document.getElementById('result').innerHTML = st[0]+Math.round(df*10)/10+st[1]+r+st[2];
}
