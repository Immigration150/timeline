function loadCircularDivPositioning()
{
  var shezanRef = document.getElementById("shezan");
  var ireneRef = document.getElementById("irene");
  var joyceRef = document.getElementById("joyce");

  var joyce_onClick = document.getElementById("joyce").addEventListener("click", function(){hideDivs(document.getElementById("joyce"), "null", "null")});
  var shezan_onClick = document.getElementById("shezan").addEventListener("click", function(){hideDivs(document.getElementById("shezan"), "null", "null")});
  var irene_onClick = document.getElementById("irene").addEventListener("click", function(){hideDivs(document.getElementById("irene"), "null", "null")});

  var logo_onClick = document.getElementById("logo").addEventListener("click", function(){hideDivs(document.getElementById("irene"), document.getElementById("shezan"), document.getElementById("joyce"))});

  var joyce_onClose = document.getElementById("joyceClose").addEventListener("click", function(){showDivs(document.getElementById("joyce"))});
  var shezan_onClose = document.getElementById("shezanClose").addEventListener("click", function(){showDivs(document.getElementById("shezan"))});
  var irene_onClose = document.getElementById("ireneClose").addEventListener("click", function(){showDivs(document.getElementById("irene"))});
  var logo_onClose = document.getElementById("logoClose").addEventListener("click", function(){applySnap()});

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

function hideDivs(divToHide1, divToHide2, divToHide3)
{
  if (divToHide1 != "null") {
    //divToHide1.style.display="none";
    divToHide1.classList.add('close');
  }
  if (divToHide2 != "null") {
    //divToHide2.style.display="none";
    divToHide2.classList.add('close');
  }
  if (divToHide3 != "null") {
    //divToHide2.style.display="none";
    divToHide3.classList.add('close');
  }
}

function showDivs(divToShow1, divToShow2, divToShow3)
{
  if (divToShow1 != "null") {
    divToShow1.classList.remove('close');
  }
  if (divToShow2 != "null") {
    //divToHide2.style.display="none";
    divToShow3.classList.remove('close');
  }
  if (divToShow3 != "null") {
    //divToHide2.style.display="none";
    divToShow3.classList.remove('close');
  }

}
