$(function(){
  var userAgent = window.navigator.userAgent.toLowerCase();
  alert(userAgent);
  if(userAgent.indexOf("iPod") > 0 || userAgent.indexOf("iPad") > 0 || userAgent.indexOf("iPhone") > 0 || userAgent.indexOf("Android") > 0){
    $("#main").load("mobile.html")
    } else {
    $("#main").load("desktop.html")
    }
})

