// deleteItem_function.js

// * Delete individual profile function * //		
function deleteItem() {
    var ask = confirm("Are you sure you want to delete this profile?");
    if (ask) {
        localStorage.removeItem(this.key);
        alert("Profile has been deleted!!!");
        window.location.reload();
    } else {
        alert("Profile was Not deleted.");
    }
}