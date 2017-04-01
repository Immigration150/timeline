//note: custom easing function "elastic2" is located in the snap.svg js file - ctrl+f elastic2
var mapRed = "rgb(238,64,54)";

function loadModalJS()
{
    var modal1 = Snap(document.getElementById("modalPath_1"));
    modal1.animate({fill: mapRed}, 500);
    
}

function modal1Open()
{
    var modal1 = Snap(document.getElementById("modalPath_1"));
    modal1.animate({d: "M 242 0 H 0 V 242 H 242 V 0 Z"}, 3000, mina.elastic2);
}