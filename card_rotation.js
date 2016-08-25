var currentCard = null;
var nextCard = null;
var duringCardTransition = false;

function setCurrentCard(){
  currentCard = $("#About_Content");
}

function SwitchCard(nextPath){
  if(!duringCardTransition && !duringPageTransition){
    nextCard = $("#"+nextPath);
    var currentCard_id = $(currentCard).attr("data-id");
    var nextCard_id = $(nextCard).attr("data-id");
    if(currentCard_id > nextCard_id){
      RotateCard("backward");
    }
    else if(currentCard_id < nextCard_id){
      RotateCard("forward");
    }
    else if(isRotated){
      RotatePage();
    }
    else{
    duringTransition = false;
    }
  }
}

function updateCardLoading(){
  var card_name = $(nextCard).attr("id");
  if(card_name == "Skills_Content"){
    setDoughnutHidden();
  }
}
function updateCardLoaded(){
  var card_name = $(currentCard).attr("id");
  if(card_name == "Skills_Content"){
    updateDoughnut("Out");
  }
}
function RotateCard(direction){
  if(isRotated){
    RotatePage();
  }
  duringCardTransition = true;
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
     duringCardTransition = false;
     updateCardLoaded();
   });
  });
}
