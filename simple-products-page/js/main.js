//Selecting Needed Element From HTML
const nameSearch = document.getElementById("search-input");
const productArray = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceInput = document.getElementById("price-input");
const priceSearchButton = document.getElementById("price-search");


//a Function to handle searching by name
const searchByNameHandler = (event) => {
    const searchQuery = event.target.value.toLowerCase().trim();
    productArray.forEach(element => {
        element.children[1].innerText.toLowerCase().includes(searchQuery) ? element.style.display = "block" : element.style.display = "none";
        }
    );
};

//a function to handle filtering by category
const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
    productArray.forEach(product => {
        if (filter === "all"){product.style.display = "block";
    } else filter === product.dataset.category ? product.style.display = "block" : product.style.display = "none";
    })

    buttons.forEach( button => button.dataset.filter === filter ? button.classList.add("chosen-button") : button.classList.remove("chosen-button"))
};

// price searching handler
function priceSearch(){
    const price = +priceInput.value;
    if (!price) {
        productArray.forEach(product => product.style.display = "block");
    } else {
        productArray.forEach(product => {
            const itemPrice = +product.children[2].innerText.substring(1).trim();
            itemPrice === price ? product.style.display = "block" : product.style.display = "none";
        });
    }
    
}

//adding event listeners on window loading
window.addEventListener("load", () => {
    nameSearch.addEventListener("keyup", searchByNameHandler);
    priceSearchButton.addEventListener("click", priceSearch);
    buttons.forEach(button => {
        button.addEventListener("click", filterHandler)
});
})