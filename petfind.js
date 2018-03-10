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
                animal: 'cat',
                sex: [0],
                age: [0],
                breeds: [0],
                contact: [0],
				output: 'basic',
				format: 'json'
			},
			
			success: function( response ) {
				
				var catName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[2].$t;
                var id = response.petfinder.pet.id.$t;
                var size = response.petfinder.pet.size.$t;
                var sex = response.petfinder.pet.sex.$t;
                var age = response.petfinder.pet.age.$t;
                var breeds = response.petfinder.pet.breeds.breed.$t;

			
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
            
                
				var list = document.createElement("div");
				list.setAttribute("List");
                document.body.appendChild(list);
                
                
                src.appendChild(newImg);
                newName.appendChild(newName);
                newSex.appendChild(newSex);
                newAge.appendChild(newAge);
                newSize.appendChild(newSize);
                newId.appendChild(newId);
                newBreed.appendChild(newBreed);
				
			}
		});
		})

}