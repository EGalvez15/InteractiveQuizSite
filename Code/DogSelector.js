function home(self,event){
	window.open("PMatch1.html");
}
function about(self,event){
	window.open("about.html");
}
function contact(self,event){
	window.open("contact.html");
}



//hash table to hold all possible options for your dog
var Dogs = {}

//initializes an image of a 
// Dogs['000'] = new Image();
Dogs['000'] = "Images/Dogs/ShihTzu.jpg";

// Dogs['001'] = new Image();
Dogs['001'] = "Images/Dogs/terrier.jpg";

// Dogs['010'] = new Image();
Dogs['010'] = "Images/Dogs/bulldog.jpg";

// Dogs['011'] = new Image();
Dogs['011'] = "Images/Dogs/husky.jpg";

// Dogs['100'] = new Image();
Dogs['100'] = "Images/Dogs/poodle.jpg";

// Dogs['101'] = new Image();
Dogs['101'] = "Images/Dogs/waterdog.jpg";

// Dogs['110'] = new Image();
Dogs['110'] = "Images/Dogs/bernese.jpg";

// Dogs['111'] = new Image();
Dogs['111'] = "Images/Dogs/shepard.jpg";

var yourDog = "";
var doggo = "";

function addTo(parameter){
	yourDog = yourDog.concat(parameter);
}

function reset(self,event){
	yourDog = "";
	alert("Your answers were reset you can try again");
}
function result(self,event){
	alert("your code is " + yourDog);
}

function getResult(self,event){
	if(yourDog.length != 3){
		alert("There was a mistake made somewhere please reset and try again");
	}
	else{
		for(var k in Dogs){
			if(k == yourDog){
				// alert("key was found in array!");
				 doggo = doggo.concat(Dogs[yourDog]);
				 localStorage.setItem("someVarKey", doggo);
				// alert(doggo);
				window.open("result.html");
			}
		}
	}
}
function getImagePath(id){
	// document.getElementById(id).src = "Images/Dogs/bernese.jpg";
	document.getElementById(id).src = localStorage.getItem("someVarKey");
}
