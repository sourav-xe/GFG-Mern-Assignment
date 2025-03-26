
let products = [
    {name:"Laptop", price:50000, category: "Electronics"},
    {name:"Shoes", price:2000, category: "Fashion"},
    {name:"Watch", price:5000, category: "Accessories"},
];

function DisplayProduct(){
    let ProductList = document.getElementById("product-list")

    products.forEach(product => {
        productList.innerHTML += `<p><strong>${product.name}</strong> - $${product.price} (${product.category})</p>`;
    });
}
   
DisplayProduct();

function addProduct() {
    // Get values from input fields
    let name = document.getElementById("product-name").value.trim();
    let price = document.getElementById("product-price").value.trim();
    let category = document.getElementById("product-category").value.trim();

    // Validate inputs (check if all fields are filled)
    if (name === "" || price === "" || category === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Convert price to number
    price = parseFloat(price);
    if (isNaN(price) || price <= 0) {
        alert("Please enter a valid price.");
        return;
    }

    // Create new product object
    let newProduct = { name, price, category };

    // Add product to list
    products.push(newProduct);

    // Refresh product list display
    displayProducts();

    // Clear input fields
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-category").value = "";
}
