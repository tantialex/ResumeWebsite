function OpenText(elem){
  var text = $(elem).find(".text");
  $(elem).animate({
    width:($(text).width()+40),
  },1000);
  $(elem).attr("onmouseover","");
}
