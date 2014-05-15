$(function(){
  $( ".toggler" ).on("touchend click", function(e) {
    $(this).closest("section").toggleClass("expanded");
    $(".closer").show();
    e.stopPropagation(); 
    e.preventDefault();
  });
  $( ".closer" ).on("touchend click", function(e) {
    $("section").removeClass("expanded");
    $(this).hide();
    e.stopPropagation();
    e.preventDefault();
  });
});
