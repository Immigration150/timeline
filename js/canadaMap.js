var mapRed = "rgb(238,64,54)";

//vars for map + anim
var max1957 = 0.8;
var max1973 = 0.8;
var max2010 = 0.8;

var nfldOpacity1957 = (0.0018)/max1957;
var peiOpacity1957 = (0.0005)/max1957;
var nsOpacity1957 = (0.0099)/max1957;
var nbOpacity1957 = (0.0059)/max1957;
var qcOpacity1957 = (0.195)/max1957;
var onOpacity1957 = (0.52)/max1957;
var manOpacity1957 = (0.04)/max1957;
var saskOpacity1957 = (0.0156)/max1957;
var albOpacity1957 = (0.0749)/max1957;
var bcOpacity1957 = (0.13)/max1957;
var territoriesOpacity1957 = (0.01)/max1957;

var nfldOpacity1973 = Math.sqrt(0.0054)/max1973;
var peiOpacity1973 = Math.sqrt(0.0015)/max1973;
var nsOpacity1973 = Math.sqrt(0.0138)/max1973;
var nbOpacity1973 = Math.sqrt(0.0094)/max1973;
var qcOpacity1973 = Math.sqrt(0.146)/max1973;
var onOpacity1973 = Math.sqrt(0.56)/max1973;
var manOpacity1973 = Math.sqrt(0.0359)/max1973;
var saskOpacity1973 = Math.sqrt(0.0101)/max1973;
var albOpacity1973 = Math.sqrt(0.0646)/max1973;
var bcOpacity1973 = Math.sqrt(0.1517)/max1973;
var territoriesOpacity1973 = Math.sqrt(0.0015)/max1973;

var nfldOpacity2010 = Math.cbrt(0.003)/max2010;
var peiOpacity2010 = Math.cbrt(0.009)/max2010;
var nsOpacity2010 = Math.cbrt(0.009)/max2010;
var nbOpacity2010 = Math.cbrt(0.008)/max2010;
var qcOpacity2010 = Math.cbrt(0.19)/max2010;
var onOpacity2010 = Math.cbrt(0.42)/max2010;
var manOpacity2010 = Math.cbrt(0.056)/max2010;
var saskOpacity2010 = Math.cbrt(0.027)/max2010;
var albOpacity2010 = Math.cbrt(0.1160)/max2010;
var bcOpacity2010 = Math.cbrt(0.1570)/max2010;
var territoriesOpacity2010 = Math.cbrt(0.002)/max2010;

window.onload = function ()
{

    var newfoundlandGroup = Snap(document.getElementById("newfoundland_grp"));
    var novaScotiaGroup = Snap(document.getElementById("novaScotia"));
    var PEIGroup = Snap(document.getElementById("PEI"));
    var newBrunswickGroup = Snap(document.getElementById("newBrunswick"));
    var quebecGroup = Snap(document.getElementById("quebec"));
    var ontarioGroup = Snap(document.getElementById("ontario"));
    var manitobaGroup = Snap(document.getElementById("manitoba"));
    var saskatchewanGroup = Snap(document.getElementById("saskatchewan"));
    var albertaGroup = Snap(document.getElementById("alberta"));
    var britishColumbiaGroup = Snap(document.getElementById("britishColumbia"));
    var territoriesGroup = Snap (document.getElementById("territories"));

    nodeOne();
    loadCircularDivPositioning();
}


function nodeOne_calledOnMap()
{
    newfoundlandGroup = Snap(document.getElementById("newfoundland_grp"));
    novaScotiaGroup = Snap(document.getElementById("novaScotia"));
    PEIGroup = Snap(document.getElementById("PEI"));
    newBrunswickGroup = Snap(document.getElementById("newBrunswick"));
    quebecGroup = Snap(document.getElementById("quebec"));
    ontarioGroup = Snap(document.getElementById("ontario"));
    manitobaGroup = Snap(document.getElementById("manitoba"));
    saskatchewanGroup = Snap(document.getElementById("saskatchewan"));
    albertaGroup = Snap(document.getElementById("alberta"));
    britishColumbiaGroup = Snap(document.getElementById("britishColumbia"));
    territoriesGroup = Snap (document.getElementById("territories"));

    //animations
    newfoundlandGroup.animate({fill:mapRed}, 350);
    newfoundlandGroup.animate({"fill-opacity":nfldOpacity1957}, 350);

    novaScotiaGroup.animate({fill:mapRed}, 350);
    novaScotiaGroup.animate({"fill-opacity":nsOpacity1957}, 350);

    PEIGroup.animate({fill:mapRed}, 350);
    PEIGroup.animate({"fill-opacity":peiOpacity1957}, 350);

    newBrunswickGroup.animate({fill:mapRed}, 350);
    newBrunswickGroup.animate({"fill-opacity":nbOpacity1957}, 350);

    quebecGroup.animate({fill:mapRed}, 350);
    quebecGroup.animate({"fill-opacity":qcOpacity1957}, 350);

    ontarioGroup.animate({fill:mapRed}, 350);
    ontarioGroup.animate({"fill-opacity":onOpacity1957}, 350);

    manitobaGroup.animate({fill:mapRed}, 350);
    manitobaGroup.animate({"fill-opacity":manOpacity1957}, 350);

    saskatchewanGroup.animate({fill:mapRed}, 350);
    saskatchewanGroup.animate({"fill-opacity":saskOpacity1957}, 350);

    albertaGroup.animate({fill:mapRed}, 350);
    albertaGroup.animate({"fill-opacity":albOpacity1957}, 350);

    britishColumbiaGroup.animate({fill:mapRed}, 350);
    britishColumbiaGroup.animate({"fill-opacity":bcOpacity1957}, 350);

    territoriesGroup.animate({fill:mapRed}, 350);
    territoriesGroup.animate({"fill-opacity":territoriesOpacity1957}, 350);

}

function nodeTwo_calledOnMap()
{
    //province refs
    newfoundlandGroup = Snap(document.getElementById("newfoundland_grp"));
    novaScotiaGroup = Snap(document.getElementById("novaScotia"));
    PEIGroup = Snap(document.getElementById("PEI"));
    newBrunswickGroup = Snap(document.getElementById("newBrunswick"));
    quebecGroup = Snap(document.getElementById("quebec"));
    ontarioGroup = Snap(document.getElementById("ontario"));
    manitobaGroup = Snap(document.getElementById("manitoba"));
    saskatchewanGroup = Snap(document.getElementById("saskatchewan"));
    albertaGroup = Snap(document.getElementById("alberta"));
    britishColumbiaGroup = Snap(document.getElementById("britishColumbia"));
    territoriesGroup = Snap (document.getElementById("territories"));

//animations
    newfoundlandGroup.animate({"fill-opacity":nfldOpacity1973}, 350);
    novaScotiaGroup.animate({"fill-opacity":nsOpacity1973}, 350);
    PEIGroup.animate({"fill-opacity":peiOpacity1973}, 350);
    newBrunswickGroup.animate({"fill-opacity":nbOpacity1973}, 350);
    quebecGroup.animate({"fill-opacity":qcOpacity1973}, 350);
    ontarioGroup.animate({"fill-opacity":onOpacity1973}, 350);
    manitobaGroup.animate({"fill-opacity":manOpacity1973}, 350);
    saskatchewanGroup.animate({"fill-opacity":saskOpacity1973}, 350);
    albertaGroup.animate({"fill-opacity":albOpacity1973}, 350);
    britishColumbiaGroup.animate({"fill-opacity":bcOpacity1973}, 350);
    territoriesGroup.animate({"fill-opacity":territoriesOpacity1973}, 350);
}

function nodeThree_calledOnMap()
{
    //province refs
    newfoundlandGroup = Snap(document.getElementById("newfoundland_grp"));
    novaScotiaGroup = Snap(document.getElementById("novaScotia"));
    PEIGroup = Snap(document.getElementById("PEI"));
    newBrunswickGroup = Snap(document.getElementById("newBrunswick"));
    quebecGroup = Snap(document.getElementById("quebec"));
    ontarioGroup = Snap(document.getElementById("ontario"));
    manitobaGroup = Snap(document.getElementById("manitoba"));
    saskatchewanGroup = Snap(document.getElementById("saskatchewan"));
    albertaGroup = Snap(document.getElementById("alberta"));
    britishColumbiaGroup = Snap(document.getElementById("britishColumbia"));
    territoriesGroup = Snap (document.getElementById("territories"));

    //animations
    newfoundlandGroup.animate({"fill-opacity":nfldOpacity2010}, 350);
    novaScotiaGroup.animate({"fill-opacity":nsOpacity2010}, 350);
    PEIGroup.animate({"fill-opacity":peiOpacity2010}, 350);
    newBrunswickGroup.animate({"fill-opacity":nbOpacity2010}, 350);
    quebecGroup.animate({"fill-opacity":qcOpacity2010}, 350);
    ontarioGroup.animate({"fill-opacity":onOpacity2010}, 350);
    manitobaGroup.animate({"fill-opacity":manOpacity2010}, 350);
    saskatchewanGroup.animate({"fill-opacity":saskOpacity2010}, 350);
    albertaGroup.animate({"fill-opacity":albOpacity2010}, 350);
    britishColumbiaGroup.animate({"fill-opacity":bcOpacity2010}, 350);
    territoriesGroup.animate({"fill-opacity":territoriesOpacity2010}, 350);
}
