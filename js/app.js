var div_tag = $("<div id='overlay'></div");
var img_tag = $("<img id='img_src'>");
var alt_text1 = $("<p></p>");


div_tag.append(img_tag);
div_tag.append(alt_text1);
$("body").append(div_tag);

$("#img_gallery a").click(function(event) {
  event.preventDefault();
  var img_loc = $(this).attr("href");
  var alt_text = $(this).children("img").attr("alt");
$(img_tag).attr("src",img_loc);
$(alt_text1).text(alt_text);
$(div_tag).show();
  });

$(div_tag).click(function() {
  $(div_tag).hide();
  });
