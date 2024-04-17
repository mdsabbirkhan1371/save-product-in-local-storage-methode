// addProduct

const addProduct=()=>{
    const productFiled = document.getElementById('product')
    const productQuantity = document.getElementById('product-quntity')
    const product = productFiled.value;
    const quantity = productQuantity.value;
    productFiled.value= ""
    productQuantity.value= ""

    displayProduct(product,quantity)
    saveInLocalStorage(product,quantity)
    
}

// displayProduct

const displayProduct =(product,quantity)=>{
    const productContainer = document.getElementById('product-container')
    const productElement = document.createElement('li')
    productElement.innerText=`${product} : ${quantity}`
    productContainer.appendChild(productElement)

}

// first check the product in shopping cart local storage is stay yes or no;

const getStoredShoppingCart = ()=>{
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart=JSON.parse(storedCart)
    }
    return cart;
}

// saveInLocalStorage 

const saveInLocalStorage =(product,quantity)=>{
    const cart = getStoredShoppingCart()
    cart[product]=quantity
    const stringify = JSON.stringify(cart)
    localStorage.setItem('cart',stringify)
}

// display after save in localStorage 

const displayProductFromLocalStorage =()=>{
    const savedCard = getStoredShoppingCart();
    console.log(savedCard)
    for(const product in savedCard){
        const quantity = savedCard[product]
        displayProduct(product,quantity)
        
    }
}
displayProductFromLocalStorage()