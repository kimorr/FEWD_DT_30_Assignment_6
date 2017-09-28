$(document).ready(function() {

	//put list of cities in an array
	var cities = ["NYC", "SF", "LA", "ATX", "SYD"]
	var selectCity = $("#city-type")
	var self = $(this)

	//get the value for each element in the array and append it to the select input as an option
	cities.forEach(function(element) {
		selectCity.append($("<option></option>").val("").html(element));
	});

	//listen for a .change in the selected option
	selectCity.change(function(element){
		//get the text of this selection
		var selectedCity = self.find(":selected").text()
		//get the text of this selection and convert it to lowercase so we can use it as the class name
		var cityClass = self.find(":selected").text().toLowerCase()
		//if the selected text is equal to the following, then add the corresponding class (which is the selected text in lowercase letters)
		if (selectedCity === "NYC") {
			$("body").attr("class", cityClass);
		}
		else if (selectedCity === "SF") { 
			$("body").attr("class", cityClass);
		}

		else if (selectedCity === "LA") {
			$("body").attr("class", cityClass);
		}
		else if (selectedCity === "ATX") {
			$("body").attr("class", cityClass);
		}
		else if (selectedCity === "SYD") {
			$("body").attr("class", cityClass);
		}
	})



})