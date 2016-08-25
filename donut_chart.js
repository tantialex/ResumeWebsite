var myDoughnutChart = null;
var direction = null;
var arrayLabels = [];
var arrayValues = [];
var arrayColors = [];

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
          labels: arrayLabels,
          datasets: [{
              label: '# of Votes',
              data: arrayValues,
              backgroundColor:arrayColors,
              borderColor: '#2c313b',
              borderWidth: 3
          }]
      },
    options: {
      title:{
        display:true,
        fontSize: 18,
        fontColor: "#FFFEEB",
        fontFamily: "'Space Mono', monospace",
        text:'Github Lines of Code',
        padding:30,
      },
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

function getGitHub(){
  var array= {};
  var loop = 0;
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/tantialex/repos",
    dataType: "json",
    success: function(repos) {
      for(var i in repos) {
        $.ajax({
       	type: "GET",
        url: ""+repos[i].languages_url,
        dataType: "json",
        success: function(lang){
        	$.each(lang,function(index, value){
            var isPresent = false;
          	$.each(array,function(arrayIndex, arrayValue){
            	if(index == arrayIndex){
              	array[index] = array[index]+value;
                isPresent = true;
              }
            });
       		  if(!isPresent){
          	  array[index] = value;
            }
          });
          loop--;
          if(loop == 0){
            setDataArrays(array);
          }
        }
       });
       loop++;
      }
      /**setTimeout(function(){
        setDataArrays(array);
      }, 100);*/
    }
  });
}
function setDataArrays(array){
  $.each(array,function(index,value){
    var color = "#FFFFFF";
    if(index == "HTML"){
      color = "#F16745";
    }
    else if(index == "JavaScript"){
      color = "#FFC65D";
    }
    else if(index == "CSS"){
      color = "#7BC8A4";
    }
    else if(index == "Java"){
      color = "#4CC3D9";
    }
    else if(index == "Android"){
      color = "#93648D";
    }
    else if(index == "XSLT"){
      color = "#404040";
    }
    arrayLabels.push(index);
    arrayColors.push(color);
    arrayValues.push(value);
  });
  console.log(arrayLabels);
  console.log(arrayValues);
}
