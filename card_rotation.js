var currentCard = null;
var nextCard = null;
var duringTransition = false;

$(window).load(function(){
  currentCard = $("#About_Content");
})

function SwitchCard(nextPath){
  if(!duringTransition){
    duringTransition = true;
    nextCard = $("#"+nextPath);
    var currentCard_id = $(currentCard).attr("data-id");
    var nextCard_id = $(nextCard).attr("data-id");
    if(currentCard_id > nextCard_id){
      RotateCard("backward");
    }
    else if(currentCard_id < nextCard_id){
      RotateCard("forward");
    }
    else{
    duringTransition = false;
    }
  }
}

function updateCardLoading(){
  console.log("loading");
  var card_name = $(nextCard).attr("id");
  if(card_name == "Skills_Content"){
    console.log("in-loading");
    setDoughnutHidden();
  }
}
function updateCardLoaded(){
  console.log("loaded");
  var card_name = $(currentCard).attr("id");
  if(card_name == "Skills_Content"){
    console.log("in-loaded");
    updateDoughnut("Out");
  }
}
function RotateCard(direction){
  var action = 0;
  var container_width = $("#ContentDisplay").width();

  if(direction == "backward")
    action = 1;
  else if(direction == "forward")
		action = -1;
    
  $(currentCard).animate({
    left: container_width*action,
    opacity: 0,
  },500,function(){
    updateCardLoading();
    $(nextCard).attr("style","left:"+(container_width*action*-1)+"; opacity:0;");
    $(nextCard).removeClass("content_hidden");
    $(nextCard).addClass("content_visible");
    $(nextCard).animate({
     left:0,
     opacity: 1,
   },500,function(){
     $(currentCard).removeClass("content_visible");
     $(currentCard).addClass("content_hidden");
     currentCard = nextCard;
     duringTransition = false;
     updateCardLoaded();
   });
  });
}
