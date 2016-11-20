// getData_function.js

// * Display Data Function * //
function getData() {
    toggleControls("on");
    if (localStorage.length === 0) {
        alert("There is no data in Local Storage so default data has been added.");
        autoFillData();
    }
    var makeDiv = document.createElement("div");
    makeDiv.setAttribute("id", "items");
    var makeList = document.createElement("ul");
    makeDiv.appendChild(makeList);
    document.body.appendChild(makeDiv);
    gEl("items")
        .style.display = "block";
    for (var i = 0, len = localStorage.length; i < len; i++) {
        var makeli = document.createElement("li");
        var linksLi = document.createElement('li');
        makeList.appendChild(makeli);
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var obj = JSON.parse(value);
        var makeSubList = document.createElement("ul");
        makeli.appendChild(makeSubList);
        getImg(obj.services[1], makeSubList);
        for (var n in obj) {
            var makeSubli = document.createElement("li");
            makeSubList.appendChild(makeSubli);
            var optSubText = obj[n][0] + " " + obj[n][1];
            makeSubli.innerHTML = optSubText;
            makeSubList.appendChild(linksLi);
        }
        makeItemLinks(localStorage.key(i), linksLi);
    }