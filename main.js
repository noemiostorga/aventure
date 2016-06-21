var name = prompt("hello there, What is your name?", "fred");
if(name != null){
	document.getElementById("demo").innerHTML = "hello " + name;
}

var meme = prompt("Chose your super dank meme");
confirm(meme + ", Nice choice");

var options = prompt("Your floating through space when a wild lebron appears what do you do? cry, stare,or catch 'em all");

if(options == "cry"){
	alert('lebron throws a peace sign and says "suh dude" and dissapears');
}
else if(options == "stare"){
	alert("lebron does a cartwheel in mid air");
}
else if(options == "catch 'em all"){
   alert("lebron is too wild to catch")
 }else{
 	alert("that's not an option");
 }


