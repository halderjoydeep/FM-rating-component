$(".choice").click(function () {
  $(".selected").removeClass("selected");
  $(this).addClass("selected");
  let rating = $(this).html();
  sessionStorage.setItem("rating", rating);
  $("button").removeAttr("disabled");
});
