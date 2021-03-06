$(document).ready(function () {

    var apiKey = '8788a1328e6d39c137797752065c325c';
    var index;
    var favName;
    var favSex;
    var favAge;
    var favSize;
    var favBreed;

    function getPetKind() {
        var selected = $('#box1').find(":selected").text();
        console.log(selected);
        if (selected === "Cats") {
            return 'cat';
        } else if (selected === "Dogs") {
            return 'dog';
        } else {
            return 'cat';
        }
    }
 
    $("#newanimal").on("click", () => {
        var url = 'http://api.petfinder.com/pet.getRandom';
        var petkind = getPetKind();
        $.ajax({
            url: url,
            jsonp: "callback",
            dataType: "jsonp",
            data: {
                key: apiKey,
                animal: petkind,
                sex: [0],
                age: [0],
                breeds: [0],
                notes: [0],
                output: 'basic',
                format: 'json'
            },

            success: function (response) {

                console.log(response);

                var petName = response.petfinder.pet.name.$t;
                favName = petName;

                var img;
                if (response.petfinder.pet.media.photos.photo[2].$t) {
                    img = response.petfinder.pet.media.photos.photo[2].$t;
                } else {
                    img = "icon.ico.ico";
                }
                var petpic = "url(" + img + ")";

                var size = response.petfinder.pet.size.$t;
                switch (size) {
                    case "S":
                        size = "Small";
                        break;
                    case "M":
                        size = "Medium";
                        break;
                    case "L":
                        size = "Large";
                        break;
                    case "XL":
                        size = "Extra Large";
                        break;
                    default:
                        size = "Undefined";
                }
                favSize = size;

                var sex = response.petfinder.pet.sex.$t;
                switch (sex) {
                    case "F":
                        sex = "Female";
                        break;
                    case "M":
                        sex = "Male";
                        break;
                    default:
                        sex = "Undefined";
                }
                favSex = sex;

                var age;
                if (response.petfinder.pet.age.$t) {
                    age = response.petfinder.pet.age.$t;
                } else {
                    age = "Not specified";
                }
                favAge = age;
            

                var breed;
                /*Checks if empty */
                if (response.petfinder.pet.breeds.breed.$t) {
                    breed = response.petfinder.pet.breeds.breed.$t;
                } else {
                    breed = "Not specified";
                }
                favBreed = breed;


                document.getElementById('petpic').style.backgroundImage = petpic;
                document.getElementById('insert_name').innerHTML = petName;


            }


        });


    })

    function isEmpty(str) {
        return (!str || 0 === str.length);
    }

    $("#favoriteani").on("click", () => {
        var index;
        for (index = 1; index < 4; index++) {
            if (isEmpty(document.getElementById("myTable").rows[index].cells[0].innerHTML)) {
                document.getElementById("myTable").rows[index].cells[0].innerHTML = favName;
                document.getElementById("myTable").rows[index].cells[1].innerHTML = favSex;
                document.getElementById("myTable").rows[index].cells[2].innerHTML = favAge;
                document.getElementById("myTable").rows[index].cells[3].innerHTML = favSize;
                document.getElementById("myTable").rows[index].cells[4].innerHTML = favBreed;
                return;
            }
            if (index == 3) {
                alert("Remove an animal before adding new one!");
            }
        }

    })

});