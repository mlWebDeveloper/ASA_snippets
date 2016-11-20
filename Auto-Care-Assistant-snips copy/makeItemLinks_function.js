// makeItemLinks_function.js
// Edit a profile link	    
function makeItemLinks(key, linksLi, linksLi_2) {
    var editLink = document.createElement('a');
    editLink.href = '#';
    editLink.key = key;
    editLink.setAttribute("class", "btn btn-primary");
    var editText = "Edits Profile";
    editLink.addEventListener("click", editItem);
    editLink.innerHTML = editText;
    linksLi.appendChild(editLink);
    var breakTag = document.createElement('br');
    linksLi.appendChild(breakTag);
    // Delete a profile link
    var deleteLink = document.createElement('a');
    deleteLink.href = "#";
    deleteLink.key = key;
    deleteLink.setAttribute("class", "btn btn-danger");
    var deleteText = "Clear Profile";
    deleteLink.addEventListener("click", deleteItem);
    deleteLink.innerHTML = deleteText;
    linksLi.appendChild(deleteLink);
    var spaces = document.createElement('p');
    linksLi.appendChild(spaces);
} // makeItemLinks function end