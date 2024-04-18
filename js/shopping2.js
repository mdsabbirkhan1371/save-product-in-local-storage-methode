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

// get the cart in localStorage save before 

const getStoredShoppingCart=()=>{
    let cart = {}
    const savedCart = localStorage.getItem('cart')
    if(savedCart){
        cart=JSON.parse(savedCart)
    }
    return cart;
}

const saveInLocalStorage =(product,quantity)=>{
    const cart = getStoredShoppingCart()
    cart[product]=quantity
    const cartStringify= JSON.stringify(cart)
    localStorage.setItem('cart',cartStringify)
}

const displayProductFromLocalStorage =()=>{
    const storedCart = getStoredShoppingCart()
    console.log(storedCart)
    for(const product in storedCart){
        
        const quantity = storedCart[product]
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage()