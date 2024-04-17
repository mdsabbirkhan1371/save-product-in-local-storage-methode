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

// get shopping cart 

const getStoredShoppingCart =()=>{
    let cart = {};
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart= JSON.parse(storedCart)
    }
     return cart;
   

}

// save product in localStorage 

const saveInLocalStorage =(product,quantity)=>{
    const cart = getStoredShoppingCart();
    cart[product]=quantity;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}

// display product after save in local storage 

const displayProductFromLocalStorage =()=>{
    const savedCart =getStoredShoppingCart();
    console.log(savedCart)
    for(const product in savedCart){
        const quantity = savedCart[product]
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage()
