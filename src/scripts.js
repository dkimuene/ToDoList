//This is a function that hold all functions and event listeners 
const listArr = [];
function init () {
    // This is the text field where you write your to dos
    const input = document.getElementById("item-name");
    //This is the submit button
    const button = document.getElementById('button');
    //This is container the to do items will be put in to
    const list = document.querySelector('.item-container');
    
// This is a function that will get the to do item enter into the text field
function getValue(){
    return val = input.value
};
/* This is an event listener that looks for clicks on the submit buttton, it makes a new list item, takes the name that was enter, 
adds the name to the list item , adds the class of item for style, adds the list item to the list*/
button.addEventListener("click", (event) => {
    event.preventDefault();
    let item = document.createElement('li');
    let itemName = document.createTextNode(getValue());
    item.appendChild(itemName);
    item.className ="item";
    list.appendChild(item);

    item.addEventListener("click", (event) => {
        let answer = confirm("Would you like to remove this item?");
        if(answer){
            list.removeChild(item)
        }
    });
    
    });  
}
//This will make sure we wait until everything is load on the page
window.addEventListener("load", init);

let listItem = document.querySelector(".item");

console.log(listArr)
// listItem.addEventListener('click', (event) => {
//     console.log("Hello");
    
// });
