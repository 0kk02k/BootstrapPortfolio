//function addTodoItem(students){ //defining the job of the function
// alert("Hello world, i am your first JS code line, and i look like how your internet browser, was designed to make me look like")

//alert(students)



//addTodoItem("the answer for everything ist number,42!") //calling the function to work


var SubmitButton = document.getElementById("TodolistTrigger");
var TodoInputField = document.getElementById("TodolistInput");
var TodoListUI = document.getElementById("TodoUL");

// i must start when the buton is clicked
function addTodolistItem() {
    //alert("Hello, World!");
    //console.log("Hello world, i am the text in your browsers console");

    var InputValue = TodoInputField.value;

    if (InputValue === "") {
        alert("Cant add empty todos");
        return; //return to exit a function / if(condition) {bodypart}
    }

    var DefaultListItem = document.createElement("li");

    DefaultListItem.textContent = InputValue;

    //var InputValueTextNode = document.createTextNode(InputValue);

    //var CompleteListItem = DefaultListItem.appendChild(InputValueTextNode);

    TodoListUI.classList.add("list-group-item", "list-group-item-primary");

    TodoListUI.appendChild(DefaultListItem);

    TodoInputField.value = ""; //Catching the input field, accessing the ability to read/modify the value aka. the data inside, and then choosing to reset the data container, meaning emptying it
}

SubmitButton.addEventListener("click", function (){
    addTodolistItem();
})

//working with Json Objects
list = {
    'name': "Okko",
    'age': "43",
    'city': "Berlin",
    'address': {
        'address1': "Berlin",
        'address2': "Bremen"
    },
    'skills': ["Html", "Css", "JS", "Git", "Github"]
}

list.currency = "€" //this ist how we add keys into a Json object
delete list.address.address2 // this is how we destroy/delete data keys in a json object

console.log(Json.stringify(list, null, 2)); //Make the tested data object more human readable
console.log(list.name) // demonstrating accessing one key of the table
console.log(list.skills[0]) // accessing one child, of the array skills after calling the table "list"
console.log(list.address.address1); // accessing the key address1, after calling the key address,
//console.log(JSON.stringify(list));
//console.log(list);
