$(function () {
   /* $("#checkbtn").on("click", () => {
        $.ajax({
            url: "http://api.petfinder.com/breed.list?key=054067075ca765d408c60164f40b5e1a&animal=barnyard"
        }).done(data => {
            console.log("Done!");
            console.log(data);
        });
    }); */


    $("#checkbtn").on("click", () => {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://api.petfinder.com/breed.list?key=054067075ca765d408c60164f40b5e1a&animal=barnyard",
            "method": "GET",
            "headers": {
                "Authorization": "Bearer 344ee8027c092c6b354a624cf7f07aa4",
                "Cache-Control": "no-cache",
                "Postman-Token": "5d7a4ac6-eae2-4bb9-aa59-60772676d309"
            }
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    });
});
