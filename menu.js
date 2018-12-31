////////////Event resize do window desfaz o menu mobile//////////////
window.addEventListener("resize", onresize);

function onresize() {

  var windowWidth = window.innerWidth;

  if(windowWidth > 852){

    document.getElementById("menu").style.background = "none";
    document.getElementById("menu").style.height = "60px";
    document.getElementById("menu").style.boxShadow = "none";
    document.getElementById("listmenu").style.display = "block";
    document.getElementById("listmenu").style.width = "auto";
    document.getElementById("listmenu").style.top = "0px";

    var el = document.getElementsByClassName('lis');
    var i = 0;
    for (var i=0;i<el.length; i++) {
        el[i].style.width = "auto";
        el[i].style.marginBottom = "0px";
    }
    var descendentesel = document.querySelectorAll(".lis a");
    var c = 0;
    for (var c=0;c<descendentesel.length; c++) {
      descendentesel[c].style.left = "0px";
      descendentesel[c].style.fontSize = "1em";
      descendentesel[c].style.top = "7px";

    }
    var icon = document.getElementsByClassName('icon');
    var b = 0;
    for (var b=0;b<icon.length; b++) {
        icon[b].style.left = "0px";
        icon[b].style.marginLeft = "0px";
    }

    click = 0;

  }else{

    if(click == 0){

      document.getElementById("listmenu").style.display = "none";

    }

  }

}
////////////Event Click do #buttonmenu aciona o menu mobile//////////////
document.getElementById("buttonmenu").addEventListener("click", onclick);

var click = 0;

function onclick() {

  click += 1;

  if(click <= 1){

    document.getElementById("menu").style.background = "#fff";
    document.getElementById("menu").style.height = "100%";
    document.getElementById("listmenu").style.display = "block";
    document.getElementById("listmenu").style.top = "60px";
    document.getElementById("listmenu").style.width = "100%";

    var el = document.getElementsByClassName('lis');
    var i = 0;
    for (var i=0;i<el.length; i++) {
        el[i].style.width = "100%";
        el[i].style.marginBottom = "20px";
    }
    var descendentesel = document.querySelectorAll(".lis a");
    var c = 0;
    for (var c=0;c<descendentesel.length; c++) {
        descendentesel[c].style.left = "-5px";
        descendentesel[c].style.fontSize = "1.8em";
        descendentesel[c].style.top = "-1px";
    }

    var icon = document.getElementsByClassName('icon');
    var b = 0;
    for (var b=0;b<icon.length; b++) {
        icon[b].style.left = "50%";
        icon[b].style.marginLeft = "-11px";
    }

  }else{

    document.getElementById("menu").style.background = "#fff";
    document.getElementById("menu").style.height = "60px";
    document.getElementById("listmenu").style.top = "0px";
    document.getElementById("menu").style.boxShadow = "0px 1px 1px #e9e9eb";
    document.getElementById("buttonmenu").style.top = "14px";
    document.getElementById("listmenu").style.width = "auto";
    document.getElementById("listmenu").style.display = "none";

    /*var el = document.getElementsByClassName('lis');
    var i = 0;
    for (var i=0;i<el.length; i++) {
        el[i].style.width = "auto";
        el[i].style.marginBottom = "0px";
    }
    var descendentesel = document.querySelectorAll(".lis a");
    var c = 0;
    for (var c=0;c<descendentesel.length; c++) {
      descendentesel[c].style.left = "0px";
      descendentesel[c].style.fontSize = "1.1em";
      descendentesel[c].style.top = "7px";

    }*/

    click = 0;

  }

}
