$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var NameInput = $("input#Name").val();
    var FoodInput = $("input#Food").val();
    var TravelInput= $("input#Travel").val();
    var MusicInput = $("input#Music").val();
    var HobbiesInput = $("input#Hobbies").val();
    var CarsInput = $("input#noun").val();

    $(".Name").text(NameInput);
    $(".Food").text(FoodInput);
    $(".Travel").text(TravelInput);
    $(".Music").text(MusicInput);
    $(".Hobbies").text(HobbiesInput);
    $(".Cars").text(CarsInput);

    $("#story").show();

    event.preventDefault();
  });
});
