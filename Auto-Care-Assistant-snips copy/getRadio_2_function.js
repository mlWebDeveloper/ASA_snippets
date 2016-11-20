// getRadio_2_function.js

// Function that loops through engine booster Radio group (ex. Supercharged, Turbocharged or Twin-Turbocharged)	
function getRadio_2() {
    var radio_2 = document.forms[0].HighPo;
    for (var i = 0; i < radio_2.length; i++) {
        if (radio_2[i].checked) {
            HighPerformance = radio_2[i].value;
        } // End if statement
    } // End loop
} // End getRadio_2 function for value to remain checked after user has checked this radio button.