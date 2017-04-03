
function loadCircularDivPositioning()
{
  var shezanRef = document.getElementById("shezan");
  var ireneRef = document.getElementById("irene");
  var joyceRef = document.getElementById("joyce");

  var circleStyle = window.getComputedStyle(shezanRef),
      widthC = (circleStyle.getPropertyValue('width')).replace('px',''),
      heightC = (circleStyle.getPropertyValue('height')).replace('px','');

  var ontarioJS = document.getElementById("ontario");
  var ontarioJSBounds = ontarioJS.getBoundingClientRect();
  var ontarioCenterX = (ontarioJSBounds.left + ontarioJSBounds.right) / 2;
  var ontarioCenterY = (ontarioJSBounds.top + ontarioJSBounds.bottom) / 2;

  var bcJS = document.getElementById("britishColumbia");
  var bcJSBounds = bcJS.getBoundingClientRect();
  var bcCenterX = (bcJSBounds.left + bcJSBounds.right) / 2;
  var bcCenterY = (bcJSBounds.top + bcJSBounds.bottom) / 2;

  shezanRef.style.left = (ontarioCenterX-(widthC/2))+'px';
  shezanRef.style.top  = (ontarioCenterY-(heightC/2))+'px';

  irene.style.left = (bcCenterX-(widthC/2)) +'px';
  irene.style.top = (bcCenterY-(heightC/2)) +'px';

  joyce.style.left = (ontarioCenterX-(widthC/2))+'px';
  joyce.style.top = (ontarioCenterY-(heightC/2))+'px';

}

function updateCircularDivPosition()
{
  var shezanRef = document.getElementById("shezan");
  var ireneRef = document.getElementById("irene");
  var joyceRef = document.getElementById("joyce");

  var circleStyle = window.getComputedStyle(shezanRef),
      widthC = (circleStyle.getPropertyValue('width')).replace('px',''),
      heightC = (circleStyle.getPropertyValue('height')).replace('px','');

  var ontarioJS = document.getElementById("ontario");
  var ontarioJSBounds = ontarioJS.getBoundingClientRect();
  var ontarioCenterX = (ontarioJSBounds.left + ontarioJSBounds.right) / 2;
  var ontarioCenterY = (ontarioJSBounds.top + ontarioJSBounds.bottom) / 2;

  var bcJS = document.getElementById("britishColumbia");
  var bcJSBounds = bcJS.getBoundingClientRect();
  var bcCenterX = (bcJSBounds.left + bcJSBounds.right) / 2;
  var bcCenterY = (bcJSBounds.top + bcJSBounds.bottom) / 2;

  shezanRef.style.left = (ontarioCenterX-(widthC/2))+'px';
  shezanRef.style.top  = (ontarioCenterY-(heightC/2))+'px';

  irene.style.left = (bcCenterX-(widthC/2)) +'px';
  irene.style.top = (bcCenterY-(heightC/2)) +'px';

  joyce.style.left = (ontarioCenterX-(widthC/2))+'px';
  joyce.style.top = (ontarioCenterY-(heightC/2))+'px';
}

function hideDivs(divToHide1, divToHide2)
{
  divToHide1.style.display="none";
  divToHide2.style.display="none";
}

function showDivs(divToShow)
{
  divToShow.style.display="inline";
}
