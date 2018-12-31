window.addEventListener("scroll", menuScrolling);

//var elmTop = document.getElementById("container-chamada").offsetTop;
var scrollY = 0;
var pre = 60;

function menuScrolling() {

    scrollY = window.pageYOffset;

      if (scrollY >= pre){

        if(click < 1){

          document.getElementById("menu").style.background = "#fff";
          document.getElementById("menu").style.height = "60px";
          document.getElementById("listmenu").style.top = "0px";
          document.getElementById("menu").style.boxShadow = "0px 1px 1px #e9e9eb";
          document.getElementById("buttonmenu").style.top = "14px";

        }

      }else{

        if(click < 1){

          document.getElementById("menu").style.background = "none";
          document.getElementById("menu").style.height = "60px";
          document.getElementById("listmenu").style.top = "0px";
          document.getElementById("menu").style.boxShadow = "none";
          document.getElementById("buttonmenu").style.top = "14px";

        }

      }

}

