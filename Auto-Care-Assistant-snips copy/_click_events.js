// _click_events.js

// * Click event functions flor links below * //
var saveData = gEl('submit');
saveData.addEventListener("click", validate);
var displayData = gEl('displayData');
displayData.addEventListener("click", getData);
var clearData = gEl('clearData');
clearData.addEventListener("click", eraseData);