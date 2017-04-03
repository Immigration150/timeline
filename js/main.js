//vars for slider
var $map = $("#map").width();
var $pieWidth = $map*0.5;

var isNodeBtnClicked = false;

var $snap = $("#snap"),
	$container = $("#container"),
	gridWidth = $map/3,
	gridHeight = 75,
	gridRows = 1,
	gridColumns = 3,
	i, x, y;
var ToggleFirst = true;
//eric vars for tween completion
var positionRef,
    elementRef,
    positionRounded;

//more vars for slider
var $nodeButtonRef = $("#nodeButton1");
var svg_timeline_bar = $('Timeline_Line.svg');



//calls applySnap which tweens the button
$nodeButtonRef.on("mousedown", function(){isNodeBtnClicked = true;});

$(window).on("mouseup", function(){if(isNodeBtnClicked){applySnap(); isNodeBtnClicked=false;}});

//$nodeButtonRef.on("mouseup", function(){isNodeBtnClicked = false;});

     //can use this but needs polish - would trigger event on any mouseup

for (i = 0; i < gridRows * gridColumns; i++) {
	y = Math.floor(i / gridColumns) * gridHeight;
	x = (i * gridWidth) % (gridColumns * gridWidth);

    //$("<div='X' ").css({position:"absolute", width:gridWidth+1, height:gridHeight-1, top:y,left:x}).prependTo($container);

	$("<div name='Hello' class ='slider'/>").css({position:"absolute", width:gridWidth, height:gridHeight-1, top:y, left:x}).prependTo($container);

    //Console.log(newID);

}

for (i = 0; i < gridColumns; i++){

    var list = document.getElementsByName("Hello")[i];
    //document.getElementsByTagName("H1")[0].removeAttribute("class");

    list.setAttribute('id',"TimePeriod_" + i);
}

//set the container's size to match the grid, and ensure that the nodeButton widths/heights reflect the variables above
TweenLite.set($container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth});

TweenLite.set(".nodeButton", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});

TweenLite.set(".slider", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});



//the update() function is what creates the Draggable according to the options selected (snapping).
function update() {
  var snap = $snap.prop("checked");
	Draggable.create(".nodeButton", {
		bounds:$container,
		edgeResistance:1,
		type:"x",
    lockAxis:true,
    autoScroll:true,
		snap:{
			x: function(endValue) {
				return (true) ? Math.round(endValue / gridWidth) * gridWidth : endValue;
			},
        }
	});

}

function applySnap() {
		$(".nodeButton").each(function(index, element) {
			TweenLite.to(element, 0.5, {
				x:Math.round(element._gsTransform.x / gridWidth) * gridWidth,
				y:Math.round(element._gsTransform.y / gridHeight) * gridHeight,
                cursor: "e-resize",
				delay:0.1,
				ease:Power2.easeInOut,
                onComplete: tweenDone,
                onCompleteParams: [element, Math.round(element._gsTransform.x / gridWidth) * gridWidth, x]

			});
		});
	update();
}


$(window).on("resize", function()
{
	//calls function to update circular div positions
	updateCircularDivPosition();
    //resizing grid and tweens
	$map = $("#map").width();
    gridWidth = $map/gridColumns;
    TweenLite.set($container, {height: gridRows * gridHeight + 1, width: gridColumns * gridWidth });

	/*TweenLit.to(".nodeButton", 1, {css: {left:Math.round(element._gsTransform.x / gridWidth) * gridWidth}});
	TweenLite.to(".nodeButton", 1, {css: {left:(gridWidth*2)}});
	TweenLite.to(element, 1, {x:Math.round(element._gsTransform.x / gridWidth) * gridWidth});*/
	TweenLite.set(".slider", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});
	TweenLite.to("#TimePeriod_1", 1, {css: {left:gridWidth-2}});
	TweenLite.to("#TimePeriod_0", 1, {css: {left:(gridWidth*2 - 2)}});
	TweenLite.set(".nodeButton", {width:gridWidth, height:gridHeight, lineHeight:gridHeight + "px"});
	applySnap();
	/*TweenLite.to("#nodeButton1", 0.5, {x:(gridWidth - Math.round(element._gsTransform.x / gridWidth))});*/
	TweenLite.to("#pie", 1, {css: {right:("0"), float:("right")}});
	TweenLite.to("#map", 1, {css: {top:("0")}});

	$pieWidth = $map*0.5;
	pie.updateProp("size.canvasWidth", $pieWidth);


});




function between(positionRounded, minX, maxX)
{
    return positionRounded >= minX && positionRounded <= maxX;
}


function tweenDone(elementRef, positionRef, xRef)
{

    if(between(Math.round(positionRef), ($nodeButtonRef.width()*0)-2, ($nodeButtonRef.width()*0)+2))
    {
        nodeOne();

    }

    else if(between(Math.round(positionRef), ($nodeButtonRef.width()*1)-2, ($nodeButtonRef.width()*1)+2))
    {
        nodeTwo();
    }

    else if(between(Math.round(positionRef), ($nodeButtonRef.width()*2)-2, ($nodeButtonRef.width()*2)+2))
    {
        nodeThree();
    }

}

var data1957 = [
  {
				"label": "Asia + Middle East",
				"value": 1.12,
				"color": "#EE6735"
			},
			{
				"label": "Africa",
				"value": 0.41,
				"color": "#EFCD35"
			},
			{
				"label": "South America",
				"value": 0.21,
				"color": "#21BF61"
			},
			{
				"label": "Europe + Russia",
				"value": 90.74,
				"color": "#6DCBD4"
			},
			{
				"label": "North America",
				"value": 3.58,
				"color": "#6B6DB3"
			},
			{
				"label": "Oceania",
				"value": 1.18,
				"color": "#5455A5"
			},
			{
				"label": "Other",
				"value": 1.18,
				"color": "#646472"
			}
];
var data1973 = [
  {
				"label": "Asia + Middle East",
				"value": 17.26,
				"color": "#EE6735"
			},
			{
				"label": "Africa",
				"value": 3.79,
				"color": "#EFCD35"
			},
			{
				"label": "South America",
				"value": 14.41,
				"color": "#21BF61"
			},
			{
				"label": "Europe + Russia",
				"value": 45.08,
				"color": "#6DCBD4"
			},
			{
				"label": "North America",
				"value": 13.31,
				"color": "#6B6DB3"
			},
			{
				"label": "Oceania",
				"value": 1.18,
				"color": "#5455A5"
			},
			{
				"label": "Other",
				"value": 4.96,
				"color": "#646472"
			}
];
var data2010 = [
  	{
				"label": "Asia + Middle East",
				"value": 58.68,
				"color": "#EE6735"
			},
			{
				"label": "Africa",
				"value": 13.80,
				"color": "#EFCD35"
			},
			{
				"label": "South America",
				"value": 4.54,
				"color": "#21BF61"
			},
			{
				"label": "Europe + Russia",
				"value": 13.33,
				"color": "#6DCBD4"
			},
			{
				"label": "North America",
				"value": 8.56,
				"color": "#6B6DB3"
			},
			{
				"label": "Oceania",
				"value": 0.54,
				"color": "#5455A5"
			},
			{
				"label": "Other",
				"value": 0.54,
				"color": "#646472"
			}
];

var pie = new d3pie("pie", {
"header": {
		"title": {
			"fontSize": 15,
			"font": "helvetica"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 5,
			"font": "helvetica"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 5,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth":  $pieWidth,
		"canvasHeight": 250 ,
		"pieInnerRadius": "70%",
		"pieOuterRadius": "75%"
	},
	"data": {
		"sortOrder": "label-asc",
		"content": data1957
	},
	"labels": {
		"outer": {
			"format": "label-percentage1"
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"font": "helvetica",
			"fontSize": 10
		},
		"percentage": {
			"color": "#999999",
			"font": "helvetica",
			"fontSize": 10,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"font": "helvetica",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"style": "straight",
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "elastic", <!-- linear, elastic, bounce, backing in -->
			"speed": 400,
			"size": 8
		}
	},
	"callbacks": {}
});


//animation functions
function nodeOne()
{
		var shezanRef = document.getElementById("shezan");
		var ireneRef = document.getElementById("irene");
		var joyceRef = document.getElementById("joyce");
    nodeOne_calledOnMap();
		hideDivs(shezanRef, ireneRef);
		showDivs(joyceRef);
    pie.updateProp("data.content", data1957);

}
function nodeTwo()
{
		var shezanRef = document.getElementById("shezan");
		var ireneRef = document.getElementById("irene");
		var joyceRef = document.getElementById("joyce");
    nodeTwo_calledOnMap();
		hideDivs(ireneRef, joyceRef);
		showDivs(shezanRef);
    pie.updateProp("data.content", data1973);

}

function nodeThree()
{
		var shezanRef = document.getElementById("shezan");
		var ireneRef = document.getElementById("irene");
		var joyceRef = document.getElementById("joyce");
    nodeThree_calledOnMap();
		hideDivs(shezanRef, joyceRef);
		showDivs(ireneRef);
    pie.updateProp("data.content", data2010);

}
update();
