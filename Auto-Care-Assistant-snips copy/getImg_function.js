// getImg_function.js

function getImg(serviceType, makeSubList) {
    var imgLi = document.createElement('li');
    makeSubList.appendChild(imgLi);
    var newImg = document.createElement('img');
    var setSrc = newImg.setAttribute("src", "images/" + serviceType + ".gif");
    imgLi.appendChild(newImg);
}
