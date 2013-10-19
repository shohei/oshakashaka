//interaction with processing
$(function(){
    $("#bg-button").click(function(){
        alert('ooo');
        var p= Processing.getInstanceById("canvas1");
        p.addEllipse();
    });


});