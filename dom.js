let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

// Form Submit event
form.addEventListener('submit', addItem);
//Delete Event 
itemList.addEventListener('click', removeItem);


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

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
    
}