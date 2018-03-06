var baseURL = "https://api.petfinder.com/";
var reqType = "pet.getRandom?";
var params = "animal=dog&";
var yourKey = "key=8788a1328e6d39c137797752065c325c&";
var output = "output=basic&";
var format = "format=json";
var callback = "&callback=?";

var fullURL = baseURL+reqType+params+yourKey+output+format+callback;
$(document).ready(function(){
    $("#request").text(fullURL);

    $.ajax({
      dataType: "json",
      url: fullURL,
      success: (function (prettyData) {
        console.log(prettyData);
        console.log(typeof prettyData);
        var prettyData = JSON.stringify(prettyData, null,'\t');
        $("#results").text(prettyData);
        console.log("Hey");
        console.log(prettyData.petfinder.pet.options.option);
        console.log(prettyData.petfinder.pet.media.photos.photo);
        console.log(prettyData.petfinder.pet.media.photos.photo[0].$t);
        var imageUrl = prettyData.petfinder.pet.media.photos.photo[0].$t;
        console.log(imageUrl);
      })

    });

  });