// eraseData_function.js

// * Erase Data Function * //
	function eraseData(){
        if(localStorage.length === 0){
            alert("No vehicle profiles were saved yet.")
        } else {
            localStorage.clear();
            alert("Your vehicle profile has been cleared.");
            window.location.reload();
            return false;
        }
    }