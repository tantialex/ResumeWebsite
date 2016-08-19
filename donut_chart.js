var myDoughnutChart = null;
var direction = null;

function setDoughnutHidden(){
  $(".chart_wrapper").html(" ");
  $(".chart_wrapper").html("<canvas id='Doughnut_Chart'></canvas>");
}
function updateDoughnut(){
  var ctx = $("#Doughnut_Chart");
  $(myDoughnutChart).attr("style","visibility:visible");
  myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ["Html", "Css", "JS & JQuery", "Java", "Android", "Xml"],
          datasets: [{
              label: '# of Votes',
              data: [8, 10, 7, 9, 8, 6],
              backgroundColor: [
                  '#F16745',
                  '#FFC65D',
                  '#7BC8A4',
                  '#4CC3D9',
                  '#93648D',
                  '#404040'
              ],
              borderColor: [
                  '#2c313b',
                  '#2c313b',
                  '#2c313b',
                  '#2c313b',
                  '#2c313b',
                  '#2c313b',
              ],
              borderWidth: 3
          }]
      },
    options: {

      cutoutPercentage:60,
      currentStep: 0,
    	numSteps: 60,
    	easing: "easeOutCirc",
    	animateRotate: true,
    	animateScale: true,
      render:null,
      onAnimationProgress: null,
    	onAnimationComplete: null,
      legend: {
        display:false,
      }
    },
  });
}
