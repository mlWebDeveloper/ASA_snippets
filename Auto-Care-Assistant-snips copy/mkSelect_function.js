// * Year select function that create a dynamic drop-down list with attributes * //
(function mkSelect() {
    var formTag = document.getElementsByTagName("form"),
        selectLi = $("#year"),
        mkSelect = document.createElement("select");
    mkSelect.setAttribute("id", "yearList");
    mkSelect.setAttribute("class", "selectpicker");
    for (var i = 0, j = yearArray.length; i < j; i++) {
        var makeOption = document.createElement("option");
        var optText = yearArray[i];
        makeOption.setAttribute("value", optText);
        makeOption.innerHTML = optText;
        mkSelect.appendChild(makeOption);
    } // End yearArray loop
    selectLi.appendChild(mkSelect);
    return;
})(); // End mkSelect Function for Vehicle Year Drop-Down