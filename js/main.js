$( document ).ready(function() {
    console.log( "ready!" );

	status = 0;

var bar = document.getElementById("arrow")
bar.addEventListener('click', resize);
//bar.addEventListener('touchstart', resize);

//var splashScreenClick = document.getElementById("splashScreen").addEventListener("click", function(){document.getElementById("splashScreen").classList.add('closed');});
function resize(){
	if(status == 0){
		document.getElementById("mobileBottomBar").className = 'grow';
		status = 1;
		bottomBar = true;
		console.log(bottomBar);
		document.getElementById("arrow").className = 'down';
		//document.getElementById('pie').style.visibility='hidden';
		  //document.getElementById('pieChart').style.visibility='hidden';
		console.log("hidden");
	}
	else{
		document.getElementById("mobileBottomBar").className = 'normal';
		status = 0;
		bottomBar = false;
		document.getElementById("arrow").className = 'up';
		console.log("visible");
		//document.getElementById('pie').style.visibility='visible';
		//document.getElementById('pieChart').style.visibility='visible';
	}
}
});

var bottomBar = false;

//vars for slider
var $map = $("#map").width();
var description1921 = "This is 1921 and this is what happened."
var description1973 = "This is 1973 and this is what happened."
var description2010 = "This is 2010 and this is what happened."
var newFoundTrue = true;

var $pieWidth = $map*0.6;
var $pieHeight = $map/3;

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
$nodeButtonRef.on("mousedown touchstart", function(){isNodeBtnClicked = true; });

$(window).on("mouseup touchend", function(){if(isNodeBtnClicked){applySnap(); isNodeBtnClicked=false;}});

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

	$pieHeight = $map/3;
	
	if($map < 600)
	{
		/*$fontSize = 13;*/
		$pieWidth = $map * 0.8;
	}
	else{
		
		$pieWidth = $map*0.6;
	}
	
	pie.updateProp("size.canvasWidth", $pieWidth);
	pie.updateProp("size.canvasHeight", $pieHeight);

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
		"canvasHeight": $pieHeight ,
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
			"effect": "linear", <!-- linear, elastic, bounce, backing in -->
			"speed": 400,
			"size": 8
		}
	},
	"callbacks": {}
});

/* SVG TOOLTIP START */
var tooltip = d3.selectAll(".tooltip:not(.css)");
var SVGmouseTip = d3.select("g.tooltip.mouse");
var ProvinceData = [
  {
				"label": "territories",
				"value": "NA Immigrated",
                "name": "Territories",
				"color": "#EE6735"
			},
			{
				"label": "britishColumbia",
				"value": "14,630 Immigrated",
                "name": "British Columbia",
				"color": "#EFCD35"
			},
			{
				"label": "alberta",
				"value": "17,781 Immigrated",
                "name": "Alberta",
				"color": "#21BF61"
			},
			{
				"label": "saskatchewan",
				"value": "13,392 Immigrated",
                "name": "Saskatchewan",
				"color": "#6DCBD4"
			},
			{
				"label": "manitoba",
				"value": "12,649 Immigrated",
                "name": "Manitoba",
				"color": "#6B6DB3"
			},
			{
				"label": "ontario",
                "value": "62,572 Immigrated",
                "name": "Ontario",
				"color": "#5455A5"
			},
			{
				"label": "quebec",
                "value": "21,100 Immigrated",
                "name": "Québec",
				"color": "#646472"
			},
    	    {
				"label": "newBrunswick",
                "value": "6,353 Immigrated",
                 "name": "New Brunswick",
				"color": "#646472"
			},
    	    {
				"label": "PEI",
                "value": "6,353 Immigrated",
                "name": "Prince Edward Island",
				"color": "#646472"
			},
            {
				"label": "novaScotia",
                "value": "6,353 Immigrated",
                "name": "Nova Scotia",
				"color": "#646472"
			},
            {
				"label": "newfoundland",
                "value": "",
                "name": "",
				"color": "#646472"
			}
];
var ProvinceData1921 = [
  {
				"label": "territories",
				"value": "NA Immigrated",
                "name": "Territories",
				"color": "#EE6735"
			},
			{
				"label": "britishColumbia",
				"value": "14,630 Immigrated",
                "name": "British Columbia",
				"color": "#EFCD35"
			},
			{
				"label": "alberta",
				"value": "17,781 Immigrated",
                "name": "Alberta",
				"color": "#21BF61"
			},
			{
				"label": "saskatchewan",
				"value": "13,392 Immigrated",
                "name": "Saskatchewan",
				"color": "#6DCBD4"
			},
			{
				"label": "manitoba",
				"value": "12,649 Immigrated",
                "name": "Manitoba",
				"color": "#6B6DB3"
			},
			{
				"label": "ontario",
                "value": "62,572 Immigrated",
                "name": "Ontario",
				"color": "#5455A5"
			},
			{
				"label": "quebec",
                "value": "21,100 Immigrated",
                "name": "Québec",
				"color": "#646472"
			},
    	    {
				"label": "newBrunswick",
                "value": "6,353 Immigrated",
                 "name": "Maritime Provinces",
				"color": "#646472"
			},
    	    {
				"label": "PEI",
                "value": "6,353 Immigrated3",
                "name": "Maritime Provinces",
				"color": "#646472"
			},
            {
				"label": "novaScotia",
                "value": "6,353 Immigrated",
                "name": "Maritime Provinces",
				"color": "#646472"
			},
            {
				"label": "newfoundland",
                "value": "",
                "name": "",
				"color": "#646472"
			}
];
var ProvinceData1973 = [
  {
				"label": "territories",
				"value": "268 Immigrated",
                "name": "Territories",
				"color": "#EE6735"
			},
			{
				"label": "britishColumbia",
				"value": "27,949 Immigrated",
                "name": "British Columbia",
				"color": "#EFCD35"
			},
			{
				"label": "alberta",
				"value": "11,904 Immigrated",
                "name": "Alberta",
				"color": "#21BF61"
			},
			{
				"label": "saskatchewan",
				"value": "1,866 Immigrated",
                                "name": "Saskatchewan",

				"color": "#6DCBD4"
			},
			{
				"label": "manitoba",
				"value": "6,621 Immigrated",
                                "name": "Manitoba",

				"color": "#6B6DB3"
			},
			{
				"label": "ontario",
				"value": "103,187 Immigrated",
                                "name": "Ontario",

				"color": "#5455A5"
			},
			{
				"label": "quebec",
				"value": "26,871 Immigrated",
                                "name": "Québec",

				"color": "#646472"
			},
    	    {
				"label": "newBrunswick",
				"value": "1,729 Immigrated",
                                 "name": "New Brunswick",

				"color": "#646472"
			},
    	    {
				"label": "PEI",
				"value": "273 Immigrated",
                                "name": "Prince Edward Island",

				"color": "#646472"
			},
            {
				"label": "novaScotia",
				"value": "2,548 Immigrated",
                                "name": "Nova Scotia",

				"color": "#646472"
			},
            {
				"label": "newfoundland",
				"value": "984 Immigrated",
                "name": "Newfoundland and Labrador",
				"color": "#646472"
			}
];
var ProvinceData2010 = [
  {
				"label": "territories",
				"value": "561 Immigrated",
                     		 "name": "Territories",

				"color": "#EE6735"
			},
			{
				"label": "britishColumbia",
				"value": "44,068 Immigrated",
                                "name": "British Columbia",

				"color": "#EFCD35"
			},
			{
				"label": "alberta",
				"value": "32,560 Immigrated",
                                "name": "Alberta",

				"color": "#21BF61"
			},
			{
				"label": "saskatchewan",
				"value": "7,579 Immigrated",
                                "name": "Saskatchewan",

				"color": "#6DCBD4"
			},
			{
				"label": "manitoba",
				"value": "15,719 Immigrated",
                                "name": "Manitoba",

				"color": "#6B6DB3"
			},
			{
				"label": "ontario",
				"value": "118,171 Immigrated",
                                "name": "Ontario",

				"color": "#5455A5"
			},
			{
				"label": "quebec",
				"value": "53,893 Immigrated",
                                "name": "Québec",

				"color": "#646472"
			},
    	    {
				"label": "newBrunswick",
				"value": "2,246 Immigrated",
                                 "name": "New Brunswick",

				"color": "#646472"
			},
    	    {
				"label": "PEI",
				"value": "2,526 Immigrated",
                                "name": "Prince Edward Island",

				"color": "#646472"
			},
            {
				"label": "novaScotia",
				"value": "2,526 Immigrated",
                                "name": "Nova Scotia",

				"color": "#646472"
			},
            {
				"label": "newfoundland",
				"value": "842 Immigrated",
                                "name": "Newfoundland and Labrador",
				"color": "#646472"
			}
];

var allStates = $("svg.CanadaMap> *");

allStates.on("mouseenter", function() {
   allStates.removeClass("on");
    $(this).addClass("on");
    
    var ProvinceID = $(this).attr("id");
    if (ProvinceID == "newfoundland" && newFoundTrue == true)
    {
    d3.select(this)
    .attr('stroke', 'none');
    } 
    else{
    d3.select(this)
    .transition()
    .duration("700")
    .attr('stroke', 'red')
    .style('stroke-width', 3)
    .style("stroke-opacity",0.5);
    }
    
    for(var i=0; i < ProvinceData.length; i++) {
       if (ProvinceData[i].label == ProvinceID) {
        document.getElementById("dataProv").innerHTML = ProvinceData[i].name;
        document.getElementById("dataValues").innerHTML = ProvinceData[i].value;

    }
}
});

allStates.on("click", function() {
    allStates.removeClass("on");
    $(this).addClass("on");
    activate = true;
    var ProvinceID = $(this).attr("id");
    if (ProvinceID == "newfoundland" && newFoundTrue == true)
    {
    d3.select(this)
    .attr('stroke','none');
    } 
    else{
    d3.select(this)
    .transition()
    .duration("700")
    .attr('stroke', 'red')
    .style('stroke-width', 3)
    .style("stroke-opacity",0.5);
    }
    
    for(var i=0; i < ProvinceData.length; i++) {
       if (ProvinceData[i].label == ProvinceID) {
        document.getElementById("dataProv").innerHTML = ProvinceData[i].name;
        document.getElementById("dataValues").innerHTML = ProvinceData[i].value;
        }
    }
});


allStates.on("mouseout", function() {
	allStates.removeClass("off");
    $(this).addClass("off");

    var ProvinceID = $(this).attr("id");
    if (ProvinceID == "territories" && newFoundTrue == true)
    {  
    d3.select(this).transition()
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1);
    }
    else if (ProvinceID == "novaScotia" && newFoundTrue == true)
    {  
    d3.select(this).transition()
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1);
    }
    else if (ProvinceID == "newBrunswick" && newFoundTrue == true)
    {  
    d3.select(this).transition()
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1);
    }
    else if (ProvinceID == "PEI" && newFoundTrue == true)
    {  
    d3.select(this).transition()
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1);
    }
    
    else{    
    d3.select(this).transition()
    .attr('stroke', 0);   

    }

    activate = false;
    

});

d3.select("svg.CanadaMap").selectAll("g")

.on("mouseover", function () {
        tooltip.style("opacity", "1");
    })

.on("click", function () {
        tooltip.style("opacity", "1");
        var mouseCoords = d3.mouse(SVGmouseTip.node().parentElement);
        SVGmouseTip
            .attr("transform", "translate("
                  + (mouseCoords[0]-10) + ","
                  + (mouseCoords[1] - 10) + ")");
    })


.on("mousemove", function () {
        var mouseCoords = d3.mouse(SVGmouseTip.node().parentElement);
        SVGmouseTip
            .attr("transform", "translate("
                  + (mouseCoords[0]-10) + ","
                  + (mouseCoords[1] - 10) + ")");
    })
.on("mouseout", function () {
        return tooltip.style("opacity", "0");
    });
/* SVG TOOLTIP END */

//animation functions
function nodeOne()
{
		var shezanRef = document.getElementById("shezan");
		var ireneRef = document.getElementById("irene");
		var joyceRef = document.getElementById("joyce");
    nodeOne_calledOnMap();
		hideDivs(shezanRef, ireneRef, "null");
		showDivs(joyceRef, "null", "null");
    pie.updateProp("data.content", data1957);

        for(var i=0; i < ProvinceData.length; i++) {
        ProvinceData[i].label = ProvinceData1921[i].label;
        ProvinceData[i].value = ProvinceData1921[i].value;
        ProvinceData[i].name = ProvinceData1921[i].name;

    }

    document.getElementById("year").innerHTML="1921";
    document.getElementById("description").innerHTML=description1921;
    document.getElementById("descriptionMobile").innerHTML=description1921;
 /*GREY AREAS*/
    var newTER = document.getElementById("territories");
    newTER.style 
    d3.select(newTER)
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1)
    .attr('stroke', 'red');
    
    var newNOV = document.getElementById("novaScotia");
    newNOV.style 
    d3.select(newNOV)
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1)
    .attr('stroke', 'red');
    var newBRUN = document.getElementById("newBrunswick");
    newBRUN.style 
    d3.select(newBRUN)
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1)
    .attr('stroke', 'red');
    var newPEI = document.getElementById("PEI");
    newPEI.style 
    d3.select(newPEI)
    .style('stroke-width', 2)
    .style('stroke-opacity', 0.1)
    .attr('stroke', 'red');
    
    newFoundTrue = true;
}
function nodeTwo()
{
		var shezanRef = document.getElementById("shezan");
		var ireneRef = document.getElementById("irene");
		var joyceRef = document.getElementById("joyce");
    nodeTwo_calledOnMap();
		hideDivs(ireneRef, joyceRef, "null");
		showDivs(shezanRef, "null", "null");
    pie.updateProp("data.content", data1973);

    document.getElementById("year").innerHTML="1973";
    document.getElementById("description").innerHTML = description1973;
    document.getElementById("descriptionMobile").innerHTML = description1973;
        for(var i=0; i < ProvinceData.length; i++) {
            ProvinceData[i].label = ProvinceData1973[i].label;
            ProvinceData[i].value = ProvinceData1973[i].value;
            ProvinceData[i].name = ProvinceData1973[i].name;
        }
	 /*GREY AREAS*/
    var newTER = document.getElementById("territories");
    newTER.style 
    d3.select(newTER)
    .style('stroke-width', 0);
    var newNOV = document.getElementById("novaScotia");
    newNOV.style 
    d3.select(newNOV)
    .style('stroke-width', 0);
    var newBRUN = document.getElementById("newBrunswick");
    newBRUN.style 
    d3.select(newBRUN)
    .style('stroke-width', 0);
    var newPEI = document.getElementById("PEI");
    newPEI.style 
    d3.select(newPEI)
    .style('stroke-width', 0);
    
    newFoundTrue = false;

}

function nodeThree()
{
		var shezanRef = document.getElementById("shezan");
		var ireneRef = document.getElementById("irene");
		var joyceRef = document.getElementById("joyce");
    nodeThree_calledOnMap();
		hideDivs(shezanRef, joyceRef, "null");
		showDivs(ireneRef, "null", "null");
    pie.updateProp("data.content", data2010);

     document.getElementById("year").innerHTML= "2010";
    document.getElementById("description").innerHTML = description2010;
	document.getElementById("descriptionMobile").innerHTML = description2010;

        for(var i=0; i < ProvinceData.length; i++) {
            ProvinceData[i].label = ProvinceData2010[i].label;
            ProvinceData[i].value = ProvinceData2010[i].value;
            ProvinceData[i].name = ProvinceData2010[i].name;

        }
    
    /*GREY AREAS*/
    var newTER = document.getElementById("territories");
    newTER.style 
    d3.select(newTER)
    .style('stroke-width', 0);
    var newNOV = document.getElementById("novaScotia");
    newNOV.style 
    d3.select(newNOV)
    .style('stroke-width', 0);
    var newBRUN = document.getElementById("newBrunswick");
    newBRUN.style 
    d3.select(newBRUN)
    .style('stroke-width', 0);
    var newPEI = document.getElementById("PEI");
    newPEI.style 
    d3.select(newPEI)
    .style('stroke-width', 0);
    
    newFoundTrue = false;
}


update();

setInterval(function() {
	//console.log("class: " + class);
      if(($(".md-show").css('visibility') == 'visible') || (bottomBar))
	  {
		  document.getElementById('pie').className = 'hidePie';
		  document.getElementById('pieChart').className = 'hidePie';

	  }
	  else
	  {
		  document.getElementById('pie').className = 'showPie';
		  document.getElementById('pieChart').className = 'showPie';
	  }
	
	
	if(($(".hidePie").css('visibility') == 'visible'))
	  {
		  document.getElementById('descriptionMobile').className = 'mobile';
		  document.getElementById('descriptionMobile').className = 'mobile';

	  }
	  if(($(".showPie").css('visibility') == 'visible'))
	  {
		  document.getElementById('descriptionMobile').className = 'nonMobile';
		  document.getElementById('descriptionMobile').className = 'nonMobile';
	  }

	  /*if(bottomBar)
	  {
		 //delay(20000);
		  document.getElementById('pie').className = 'hidePie';
		  document.getElementById('pieChart').className = 'hidePie';
	  }
	  else{
		  document.getElementById('pie').className = 'showPie';
		  document.getElementById('pieChart').className = 'showPie';
	  }*/

}, 100);
