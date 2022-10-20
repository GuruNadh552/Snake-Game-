var page = 1;
var isCalled = false;
loadRoute();
$(window).scroll(function () {
  // End of the document reached?
  var scrollHeight = $(document).height();
  var scrollPos = Math.floor($(window).height() + $(window).scrollTop());
  if ((scrollHeight - scrollPos) / scrollHeight == 0 && !isCalled) {
    setTimeout(loadRoute(),5000);
  }
});

function loadRoute() {
  isCalled = true;
  $(".loader").css("display", "block");
  $.ajax({
    type: "GET",
    url: `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=10`,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (msg) {
      if (msg.data) {
        console.log(msg);
        for (let i of msg.data) $(".container").append(`<h1>${i.quote}</h1>`);
        page += 1;
        $(".loader").css("display", "none");
        isCalled = false;
      }
    },
    error: function (req, status, error) {
      alert("Error try again");
    },
  });
}
