// editItem_function.js

	function editItem() {
	    //Grab data from localStorage
	    var value = localStorage.getItem(this.key);
	    var item = JSON.parse(value);
	    //Show form
	    toggleControls("off");
	    // Get elememts by Id
	    gEl('yearList')
	        .value = item.year[1];
	    gEl('miles')
	        .value = item.miles[1];
	    gEl('make')
	        .value = item.make[1];
	    gEl('model')
	        .value = item.model[1];
	    gEl('serviceList')
	        .value = item.services[1];
	    gEl('date')
	        .value = item.services[1];

	    // Loop that re-checks engine size radio button that user checked			
	    var radios = document.forms[0].engineSize;
	    for (var i = 0; i < radios.length; i++) {
	        if (radios[i].value == "4-cylinder" && item.engineSize[1] == "4-cylinder") {
	            radios[i].setAttribute("checked", "checked");
	        } else if (radios[i].value == "6-cylinder" && item.engineSize[1] == "6-cylinder") {
	            radios[i].setAttribute("checked", "checked");
	        } else if (radios[i].value == "8-cylinder" && item.engineSize[1] == "8-cylinder") {
	            radios[i].setAttribute("checked", "checked");
	        } else if (radios[i].value == "10-cylinder" && item.engineSize[1] == "10-cylinder") {
	            radios[i].setAttribute("checked", "checked");
	        } else if (radios[i].value == "12-cylinder" && item.engineSize[1] == "12-cylinder") {
	            radios[i].setAttribute("checked", "checked");
	        } else if (radios[i].value == "16-cylinder" && item.engineSize[1] == "16-cylinder") {
	            radios[i].setAttribute("checked", "checked");
	        } // Nested if else staements end
	    } // radios function end

	    // Loop that re-checks engine booster radio button that user checked			
	    var radio_2 = document.forms[0].HighPo;
	    for (var i = 0; i < radio_2.length; i++) {
	        if (radio_2[i].value == "Supercharged" && item.HighPo[1] == "Supercharged") {
	            radio_2[i].setAttribute("checked", "checked");
	        } else if (radio_2[i].value == "Turbocharged" && item.HighPo[1] == "Turbocharged") {
	            radio_2[i].setAttribute("checked", "checked");
	        } else if (radio_2[i].value == "Twin-Turbocharged" && item.HighPo[1] == "Twin-Turbocharged") {
	            radio_2[i].setAttribute("checked", "checked");
	        } // Nested if else staements end
	    } // radios_2 end	

	    // Set values to submit		
	    gEl('warranty')
	        .value = item.warranty[1];
	    gEl('date')
	        .value = item.date[1];
	    gEl('notes')
	        .value = item.notes[1];
	    gEl('date')
	        .value = item.date[1];
	    gEl('warranty')
	        .value = item.warranty[1];
	    gEl('notes')
	        .value = item.notes[1];

	    // Remove initial listener from save vehicle and store data
	    saveData.removeEventListener("click", storeData);
	    // Change Submit Button Value to Edit Button
	    gEl('submit')
	        .value = "Edit Profile";
	    var eSubmit = gEl('submit');
	    //Save the key in this function to be used when user edits profile		
	    eSubmit.addEventListener("click", validate);
	    eSubmit.key = this.key;
	}