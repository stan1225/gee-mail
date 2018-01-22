$(document).ready(function(){
	console.log("ready");


});

window.onload = function(){

  	for(var i = 0; i < window.geemails.length; i++){
        
	  var itemBox = document.createElement("div");
	  itemBox.className = "container";
	  document.body.appendChild(itemBox);

	  var dateBox = document.createElement("div");
	  dateBox.className = "datebox";
	  dateBox.innerHTML = window.geemails[i].date;
	  itemBox.appendChild(dateBox);
        
        var senderBox = document.createElement("div");
	  senderBox.style.border = "1px solid black";
	  senderBox.className = "sendbox";
	  senderBox.innerHTML = window.geemails[i].sender;
	  itemBox.appendChild(senderBox);

	  var subjectBox = document.createElement("div");
	  subjectBox.style.border = "1px solid black";
	  subjectBox.className = "subjbox";
	  subjectBox.innerHTML = window.geemails[i].subject;
	  itemBox.appendChild(subjectBox);


	  var butBox = document.createElement("button");
	  var spanDiv = document.createElement("span");
	  spanDiv.className = "glyphicon glyphicon-plus";
	  butBox.className = "btn btn-default btn-sm";
	  butBox.id = "butBox";
	  butBox.style.border = "1px solid black";
	  butBox.appendChild(spanDiv);
	  subjectBox.appendChild(butBox);

	  var bodyBox = document.createElement("div");
	  bodyBox.style.border = "1px solid black";	
	  bodyBox.id = "bodBox";
	  bodyBox.className = "col-sm-9";
	  bodyBox.style.display = "none";
	  bodyBox.innerHTML = window.geemails[i].body;
	  itemBox.appendChild(bodyBox);


	}

	document.getElementById("butBox").addEventListener("click", function(){
	console.log("you clicked!");
	document.getElementById("bodBox").style.display = "inline";
});

};