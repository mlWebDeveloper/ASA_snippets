// autoFillData_function.js

// Auto fill function if no data is in the browser's local storage		
function autoFillData() {
    // Store JSON Object to localStorage.
    for (var n in json) {
        var id = Math.floor(Math.random() * 1000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
    }
}