


var i=0;
function move(){
	if(i==0){
		i =1;
		var elem = document.getElementById("myBar");
		var width =1;
		var id = setInterval(frame,10);
		function frame(){
			if(width >=100)	{
				clearInterval(id);
				i=0;
			}else{
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

toggle between hiding and showing the dropdown content */
function input_dropbox() {
  document.getElementById("inputDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// define the callAPI function that takes a first name and last name as parameters
var callAPI = (firstName,lastName)=>{
	// instantiate a headers object
	var myHeaders = new Headers();
	// add content type header to object
	myHeaders.append("Content-Type", "application/json");
	// using built in JSON utility package turn object to string and store in a variable
	var raw = JSON.stringify({"firstName":firstName,"lastName":lastName});
	// create a JSON object with parameters for API call and store in a variable
	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};
	// make API call with parameters and use promises to get response
	fetch("https://lpb2pszwab.execute-api.ap-northeast-2.amazonaws.com/dev", requestOptions)
	.then(response => response.text())
	.then(result => alert(JSON.parse(result).body))
	.catch(error => console.log('error', error));			
}