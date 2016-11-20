// getRadio_1_function.js

// Get dynamic radio values and convert then to static values
// Function that loops through engine size Radio group

function getRadio_1() {
    var radios = document.forms[0].engineSize;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            engineValue = radios[i].value;
        } // End if statement
    } // End loop
} // End getRadio_1 function for value to remain checked after user has checked this radio button.