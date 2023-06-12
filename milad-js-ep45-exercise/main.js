//for this exercise, you should create an unOrdered List and append it to the exsisting div
//then you should append the contents of userData as p tags nested in "li"s to unOrderedList created before.
const userData = [
    {name: "mamad" , age:24},
    {name: "ali" , age:22},
    {name:"john", age:31},
    {name:"jose", age:19},
    {name:"jesse", age:23},
];

//creating  a list element and append it to div container
// const listElement = document.createElement("ul");
// listElement.setAttribute("class", "list");

//adding list items to list element using a for loop
// for (let i = 0 ; i < userData.length ; i++){
//     listElement.appendChild(document.createElement("li"));
// };

//setting class attribute to list items
// for(let i = 0 ; i < userData.length ; i++){
//     listElement.children[i].setAttribute("class", "listItem");
//     listElement.children[i].appendChild(document.createElement("p"));
//     listElement.children[i].children[0].innerText = `the age of ${userData[i].name} is ${userData[i].age}`;
    
// };

//and finally adding unOrderedList to div container.
// const container = document.querySelector(".container");
// container.appendChild(listElement);



/////////////////////////////////////////////
//method 2, shorter way
////////////////////////////////////////////


//creating  an unOrderedlist
const listElement = document.createElement("ul");
listElement.setAttribute("class", "list");

//a loop to grab each object from userData, create a list item for it and generate the string for each item based on the values in object.
userData.forEach(item => {
    const li = document.createElement("li");
    listElement.appendChild(li);
    li.innerText = `the age of ${item.name} is ${item.age}`;
});

//and finally adding ul to the div container.
const container = document.querySelector(".container");
container.appendChild(listElement);





















