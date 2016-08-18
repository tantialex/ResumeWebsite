google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
 var data = google.visualization.arrayToDataTable([
   ['Task', 'Hours per Day'],
   ['Html',        8],
   ['JS & JQuery',  9],
   ['Css',          7],
   ['Java',         8],
   ['Android',      8],
   ['Xml',          7]
 ]);

 var options = {
   backgroundColor: {
    fill:'transparent',
   },
   colors:['#05668D','#039cb0','#028090','#00A896','#00e6cf','#F0F3BD'],
   pieHole: 0.7,
   pieSliceTextStyle: {
      color: 'black',
   },
   legend: 'none'
};

 var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
 chart.draw(data, options);
}
