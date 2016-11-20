// toggleControls_function.js

// * Toggle Control Function *  //
function toggleControls(n) {
    switch (n) {
        case "on":
            gEl("vehicleForm")
                .style.display = "none";
            gEl('clearData')
                .style.display = "inline";
            gEl("displayData")
                .style.display = "none";
            gEl("field2")
                .style.display = "none";
            gEl("addNew")
                .style.display = "inline";
            break;
        case "off":
            gEl("vehicleForm")
                .style.display = "block";
            gEl('clearData')
                .style.display = "inline";
            gEl("displayData")
                .style.display = "inline";
            gEl("addNew")
                .style.display = "none";
            gEl("field2")
                .style.display = "block";
            gEl("items")
                .style.display = "none";
            break;
        default:
            return false;
    }
}