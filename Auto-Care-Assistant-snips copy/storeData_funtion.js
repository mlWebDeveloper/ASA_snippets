// * Store Data Function * //
	function storeData(key) {
// If no key, then a new key is to be given.  The same key has been passed through		
		if(!key) {
        	var id 					= Math.floor(Math.random()*1000001);
        } else {
	        	id = key;
		        }
	        getRadio_1();
	        getRadio_2();
	        var choice = {};
	            choice.year 		= ["Vehicle Year:", 
	            	gEl("yearList").value];
	            choice.miles 		= ["Vehicle Mileage:", 
	            	gEl("miles").value];
	            choice.make 		= ["Vehicle Make:", 
	            	gEl("make").value];
	            choice.model 		= ["Vehicle Model:", 
	            	gEl("model").value];
	            choice.engineSize 	= ["Engine Size:", 
	            	engineValue];
	            choice.HighPo 		= ["Engine Booster:", 
	            	HighPerformance];
	            choice.date 		= ["Service Date:", 
	            	gEl("date").value];
	            choice.services 	= ["Vehicle services:", 
	            	gEl("serviceList").value];
	            choice.warranty 	= ["Vehicle Warranty:", 
	            	gEl("warranty").value];
	            choice.notes 		= ["Notes:", gEl("notes").value];
	        localStorage.setItem(id, JSON.stringify(choice));
	        alert("Your profile has been stored!");
	    }