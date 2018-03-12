$(function () {
 
var apiKey = '8788a1328e6d39c137797752065c325c';
console.log("grsgsg");

    $(".btn4").on("click", () => {
        var url = 'http://api.petfinder.com/pet.getRandom';
        var petkind = 'cat';
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

                var catName = response.petfinder.pet.name.$t;
                var img = response.petfinder.pet.media.photos.photo[2].$t;

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
                        size = size;
                }

                var sex = response.petfinder.pet.sex.$t;
                switch (sex) {
                    case "F":
                        sex = "Female";
                        break;
                    case "M":
                        sex = "Male";
                        break;
                    default:
                        sex = sex;
                }

                var age = response.petfinder.pet.age.$t;
                var breed;
                /*Checks if empty */
                if (response.petfinder.pet.breeds.breed.$t) {
                    breed = response.petfinder.pet.breeds.breed.$t;
                } else {
                    breed = "Not specified";
                }



                var newName = document.getElementById("n1");
                newName.textContent = catName;


                var newSex = document.getElementById('g1');
                newSex.textContent = sex;

                var newAge = document.getElementById('a1');
                newAge.textContent = age;

                var newSize = document.getElementById('s1');
                newSize.textContent = size;

                var newBreed = document.getElementById('b1');
                newBreed.textContent = breed;


                var petpic = "url(" + img + ")";
                document.getElementById('petpic').style.backgroundImage = petpic;
                newName.appendChild(newName);
                newSex.appendChild(newSex);
                newAge.appendChild(newAge);
                newSize.appendChild(newSize);
                newBreed.appendChild(newBreed);
     

            }

        });
    })

  /*  function bindButtons() {
      
        document.addEventListener('click', function (event) {
        event.preventDefault();
       

        
       
    })

   }
    */
})