
$(document).ready(() => {
  const slider = $("#image_list");
  const image = $("#image");
  var listArray = $("li").toArray();

  var i = 0;
  var listEnd = listArray.length - 1;

  $("#right_button").click(() => {
    var leftProperty = parseInt(slider.css("left"));
    let newLeftProperty = 0;
    let imageUrl = "";
    if (i == listEnd) {

      leftProperty = 0;
      if (leftProperty - 100 > -900) {
        newLeftProperty = leftProperty - 100;

        i = 0;
        const nextImage = $(listArray[++i]).find("img");
        imageUrl = nextImage.attr("src");
      }
      animateSlide(newLeftProperty, imageUrl);
    }
    else {


      if (leftProperty - 100 > -900) {
        newLeftProperty = leftProperty - 100;
        const nextImage = $(listArray[i++]).find("img");
        imageUrl = nextImage.attr("src");
      }

      animateSlide(newLeftProperty, imageUrl);
    }
  });

  $("#left_button").click(() => {
    var leftProperty = parseInt(slider.css("left"));
    let newLeftProperty = 0;
    let imageUrl = "";
    if (i == 0) {

      leftProperty = -900;
      if (leftProperty < 0) {
        newLeftProperty = leftProperty + 100;
        i = listEnd;
        var prevImage = $(listArray[i]).find("img");
        imageUrl = prevImage.attr("src");
      }
      animateSlide(newLeftProperty, imageUrl);
    }
    else {

      if (leftProperty < 0) {
        newLeftProperty = leftProperty + 100;
        var prevImage = $(listArray[--i]).find("img");
        imageUrl = prevImage.attr("src");
      }

      animateSlide(newLeftProperty, imageUrl);
    }
  });

  const animateSlide = (newLeftProperty, imageUrl) => {
    image.animate({ opacity: 0, marginLeft: "-205px" }, 1000, () => {
      image.css({ "margin-left": "0", opacity: 1 });
      image.attr("src", imageUrl);
    });
    slider.animate({ left: newLeftProperty }, 1000);
  };
});

$(document).ready(() => {
  $("#image_list a").click(evt => {
    evt.preventDefault();
    var a = evt.currentTarget;
    var aHref = $(a).attr("href");
    $("#image").attr("src", aHref);
  });
});
