var apiKey = '8788a1328e6d39c137797752065c325c';


document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.addEventListener('click', function(event){
        event.preventDefault();
       

		var url = 'http://api.petfinder.com/pet.getRandom';
		
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
                animal: 'dog',
                sex: [0],
                age: [0],
                breeds: [0],
                notes: [0],
				output: 'basic',
				format: 'json'
			},
			
			success: function( response ) {
				
				var catName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[2].$t;
                
                var size = response.petfinder.pet.size.$t;
                switch (size){
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
                switch (sex){
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
                var breeds = response.petfinder.pet.breeds.breed.$t;
                
                var notes = response.petfinder.pet.options.option;
                for(var i = 0; i < notes.length; i++){
                    notes[i] = notes[i].$t;
                }

			
                var newImg = document.getElementById("insert_img");
                newImg.src = img;

                var newName = document.getElementById("insert_name");
                newName.textContent = catName;
                

                var newSex = document.getElementById('gender');
                newSex.textContent = sex;
                
                var newAge = document.getElementById('age');
                newAge.textContent = age;

                var newSize = document.getElementById('size');
                newSize.textContent = size;

                var newBreed = document.getElementById('breed');
                newBreed.textContent = breeds;
            
                var newNotes = document.getElementById('notes');
                newNotes.textContent = notes;
                
				var list = document.createElement("div");
				list.setAttribute("List");
                document.body.appendChild(list);
                
                
                src.appendChild(newImg);
                newName.appendChild(newName);
                newSex.appendChild(newSex);
                newAge.appendChild(newAge);
                newSize.appendChild(newSize);
                newBreed.appendChild(newBreed);
                newNotes.appendChild(newNotes);
				
			}
		});
		})

}