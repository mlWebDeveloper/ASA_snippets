// validate_function.js

// Validate inputs		
function validate(d) {
    // Define the elements that needs to be checked.
    var gets_Year = gEl('yearList');
    var getMiles = gEl('miles');
    var getMake = gEl('make');
    var getModel = gEl('model');
    var get_Date = gEl('date');
    var gets_Service = gEl('serviceList');

    // Reset Error messages	
    errMsg.innerHTML = "";
    gets_Year.style.border = "1px solid black";
    getMiles.style.border = "1px solid black";
    getMake.style.border = "1px solid black";
    getModel.style.border = "1px solid black";
    gets_Service.style.border = "1px solid black";


    // Get error messages
    var messArry = [];
    // Year validation			 
    if (gets_Year.value === "--Select Year--") {
        var yearError = "Please select a year.";
        gets_Year.style.border = "1px solid red";
        messArry.push(yearError);
    }

    // Miles validation	
    if (getMiles.value === "") {
        var milesError = "Please enter Vehicle mileage.";
        getMiles.style.border = "1px solid red";
        messArry.push(milesError);
    }

    // Make validation				
    if (getMake.value === "") {
        var makeError = "Please enter Vehicle make.";
        getMake.style.border = "1px solid red";
        messArry.push(makeError);
    }

    // Model validation				
    if (getModel.value === "") {
        var modelError = "Please enter Vehicle model.";
        getModel.style.border = "1px solid red";
        messArry.push(modelError);
    }

    // Service type validation				

    if (gets_Service.value === "--Select Service--") {
        var servicesError = "Please enter Service type.";
        gets_Service.style.border = "1px solid red";
        messArry.push(servicesError);
    }

    // If errors are present, they will display on the screen.				
    if (messArry.length >= 1) {
        for (var i = 0, j = messArry.length; i < j; i++) {
            var txt = document.createElement('li');
            txt.innerHTML = messArry[i];
            errMsg.appendChild(txt);
        }
        d.preventDefault();
        return false;
    } else {
        // If all is correct, save all data. Send  key value from editData function
        // This key value is also passed through esubmit function event listener as a propety
        storeData(this.key);
    }
}