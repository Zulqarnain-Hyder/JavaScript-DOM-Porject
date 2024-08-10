let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');
// Form Submit event
form.addEventListener('submit', addItem);
//Delete Event 
itemList.addEventListener('click', removeItem);
//Filter Event
filter.addEventListener("keyup", filterItems);


//Add Item
function addItem(e) {
    e.preventDefault();

    //Get input value 
    let newItem = document.getElementById('item').value;

    //Create new li element 
    let li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    console.log(li);
    //Add Text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create Delete buttom Element
    let deletebtn = document.createElement('button');

    //Add Classes to delete button
    deletebtn.className = 'btn btn-danger btn-sm float-end delete';
    //Append text node

    deletebtn.appendChild(document.createTextNode("X"));
    //Append Button ti li
    li.appendChild(deletebtn)
    //Append li to List
    itemList.appendChild(li);
}

//Remove Item

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you Sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }

}

//Filter Items
function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase();
    //Get li's
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}