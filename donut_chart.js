google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
 var data = google.visualization.arrayToDataTable([
   ['Language', 'Score'],
   ['Html',         8],
   ['JS & JQuery',  9],
   ['Css',          7],
   ['Java',         8],
   ['Android',      8],
   ['Xml',          6]
 ]);

 var options = {
   backgroundColor: {
    fill:'transparent',
   },
   colors:['#F16745','#FFC65D','#7BC8A4','#4CC3D9','#93648D','#404040'],
   pieHole: 0.7,
   pieSliceText:'none',
   legend: 'none',
   height:400,
   pieSliceBorderColor:"transparent",
   pieResidueSliceColor:'#000000',
   pieStartAngle:22
};

 var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
 chart.draw(data, options);
 loadAnimation();
}
function loadAnimation(){
  var container = $("#donutchart");
}
