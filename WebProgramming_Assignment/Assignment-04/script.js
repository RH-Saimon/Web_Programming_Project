// Shopping cart array
let cart = [];

// Add product to cart
function addToCart(name, price) {

    let product = cart.find(item => item.name === name);

    if (product) {
        product.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    displayCart();
}


// Display cart products
function displayCart() {

    let output = "";

    cart.forEach(function(product, index) {

        output += `
            <p>
                ${product.name} - ${product.price} Tk

                <button onclick="changeQuantity(${index}, -1)">-</button>

                ${product.quantity}

                <button onclick="changeQuantity(${index}, 1)">+</button>

                <button onclick="removeProduct(${index})">Remove</button>
            </p>
        `;

    });

    document.getElementById("cart").innerHTML = output;
}


// Update quantity
function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    displayCart();
}


// Remove product
function removeProduct(index) {

    cart.splice(index, 1);

    displayCart();
}


// Calculate invoice
function checkout() {

    if (cart.length === 0) {
        document.getElementById("invoice").innerHTML =
            "<p>Please add a product to your cart.</p>";
        return;
    }

    let subtotal = 0;

    cart.forEach(function(product) {
        subtotal += product.price * product.quantity;
    });

    // Apply discount coupon
    let discount = 0;

    let coupon = document.getElementById("coupon").value.trim();

    if (coupon.toUpperCase() === "SAVE10") {
        discount = subtotal * 10 / 100;
    }

    // Calculate VAT (example: 15%)
    let vat = (subtotal - discount) * 15 / 100;

    // Final payment
    let total = subtotal - discount + vat;

    // Generate invoice
    document.getElementById("invoice").innerHTML = `
        <h3>Shopping Invoice</h3>

        <p>Subtotal: ${subtotal.toFixed(2)} Tk</p>

        <p>Discount: ${discount.toFixed(2)} Tk</p>

        <p>VAT (15%): ${vat.toFixed(2)} Tk</p>

        <h3>Final Payment: ${total.toFixed(2)} Tk</h3>

        <button onclick="window.print()">Print Invoice</button>
    `;
}