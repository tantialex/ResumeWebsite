function OpenText(elem){
  console.log($(elem));
  var text = $(elem).find(".text");
  console.log($(text));
  $(elem).animate(function(){
    width:(40+text.width())
  });
  $(elem).attr("onmouseover","");
}
