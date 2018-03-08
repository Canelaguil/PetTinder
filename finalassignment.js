$(document).ready(function () {
    $("#checkbtn").on("click", () => {
        var checkbnr = document.querySelectorAll('input[type="checkbox"]:checked').length;
        console.log(checkbnr);
        if (checkbnr === 10) {
            alert("You are definitely ready to get a dog!");
        } else if (checkbnr > 6 && checkbnr < 10) {
            alert("Maybe have another look at the points you missed. Almost there!");
        } else {
            alert("You're not ready yet! Maybe consider another breed or animal!");
        }
    });




});
  