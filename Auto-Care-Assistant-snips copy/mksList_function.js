// * Service type select function that create a dynamic drop-down list with attributes * //
(function mksList() {
    var formTag2 = document.getElementsByTagName("form"),
        sLi = $("#services"),
        mkSel = document.createElement("select");
    mkSel.setAttribute("id", "serviceList");
    for (var y = 0, r = serviceArray.length; y < r; y++) {
        var makeOpt = document.createElement("option");
        var optTxt = serviceArray[y];
        makeOpt.setAttribute("value", optTxt);
        makeOpt.innerHTML = optTxt;
        mkSel.appendChild(makeOpt);
    } // End serviceArray loop
    sLi.appendChild(mkSel);
    return;
})(); // End mkList Function for Services selection list