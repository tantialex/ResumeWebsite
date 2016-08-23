var isRotated = false;
var left_panel = null;
var right_panel = null;
var main_panel_width = null;
var main_panel_height = null;
var left_panel_width = null;
var right_panel_width = null;
var bottom_panel = null;
var main_panel = null;
var duringPageTransition = false;

function setPanels(){
  left_panel = $(".main_panel_container > .left_panel");
  right_panel = $(".main_panel_container > .right_panel");
  bottom_panel = $("#Contact_Content");
  main_panel = $(".main_panel_container");
}

function RotatePage(){
  if(!duringCardTransition && !duringCardTransition){
  duringPageTransition = true;
  main_panel_width = $(main_panel).width();
  main_panel_height = $(main_panel).height();
  left_panel_width = $(left_panel).width();
  right_panel_width = $(right_panel).width();

  if(isRotated)
    CloseContacts();
  else if(!isRotated)
    OpenContacts();
  }
}
function CloseContacts(){
  $(bottom_panel).animate({
    height:0,
    opacity:0
  },{duration:1000, queue: false});
  $(left_panel).animate({
    height:main_panel_height,
  },{duration:1000, queue: false});
  $(right_panel).animate({
    height:main_panel_height,
  },{duration:1000, queue: true, complete:function(){
    $(left_panel).animate({
      width:main_panel_width*40/100,
    },{ duration: 1000, queue: false});
    $(right_panel).animate({
      width:main_panel_width*60/100
    },{ duration: 1000, queue: false, complete:function(){
      $(right_panel).animate({
        opacity:1
      },{ duration: 200, queue: true });
      isRotated = false;
      duringPageTransition = false;
    }});
  }});
}
function OpenContacts(){
  console.log(main_panel_width);
  $(right_panel).animate({
    opacity:0
  },{ duration: 200, queue: true, complete:function(){
    $(right_panel).animate({
      width:0
    },{ duration: 1000, queue: false });
    $(left_panel).animate({
      width:main_panel_width
    },{ duration: 1000, queue: false, complete:function(){
      $(left_panel).animate({
        height:(main_panel_height*50/100),
      },{duration:1000, queue: false});
      $(right_panel).animate({
        height:(main_panel_height*50/100),
      },{duration:1000, queue: false});
      $(bottom_panel).animate({
        height:(main_panel_height*65/100),
        opacity:1
      },{duration:1000, queue: false});

      isRotated = true;
      duringPageTransition = false;
      console.log(main_panel_width);
    }});
  }});
}

$(window).resize(function(){
  if(isRotated){
    $(left_panel).css("width",$(main_panel).width());
    $(left_panel).css("height",$(main_panel).height()*50/100);
    $(bottom_panel).css("height",$(main_panel).height()*65/100);
  }
});
