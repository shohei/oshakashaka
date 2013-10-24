$(function(){
  var userAgent = window.navigator.userAgent.toLowerCase();
  alert(userAgent);
  if(userAgent == "iPod" || userAgent == "iPad" || userAgent == "iPhone" || userAgent == "Android"){
    $("#main").load("mobile.html")
    } else {
    $("#main").load("desktop.html")
    }
})

