$(function(){
  var userAgent = window.navigator.userAgent.toLowerCase();
  alert(userAgent);
  if(userAgent.indexOf("iPod") != -1 || userAgent.indexOf("iPad") != -1 || userAgent.indexOf("iPhone") > != -1 || userAgent.indexOf("Android") != -1 ){
    $("#main").load("mobile.html")
    } else {
    $("#main").load("desktop.html")
    }
})

