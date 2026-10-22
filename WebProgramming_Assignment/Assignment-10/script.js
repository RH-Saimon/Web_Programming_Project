const menu = {
    "Burger": 250,
    "Pizza": 800,
    "Fried Rice": 350,
    "Coffee": 120,
    "Soft Drink": 50
};

let cart = [];

function addItem(name) {

    let item = cart.find(function(product) {
        return product.name === name;
    });

    if (item) {
        item.quantity++;
    } else {
        cart.push({
            name: name,
            price: menu[name],
            quantity: 1
        });
    }

    displayCart();
}

function displayCart() {

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let subtotal = 0;

    cart.forEach(function(item, index) {

        let total = item.price * item.quantity;

        subtotal += total;

        let row = cartItems.insertRow();

        row.insertCell(0).innerText = item.name;

        row.insertCell(1).innerText = item.price;

        let quantityCell = row.insertCell(2);

        quantityCell.innerHTML = `
            <input
                type="number"
                min="1"
                value="${item.quantity}"
                onchange="updateQuantity(${index}, this.value)"
            >
        `;

        row.insertCell(3).innerText = total;

        let actionCell = row.insertCell(4);

        actionCell.innerHTML = `
            <button
                class="remove-btn"
                onclick="removeItem(${index})"
            >
                Remove
            </button>
        `;
    });

    let vat = subtotal * 0.15;

    let serviceCharge = subtotal * 0.05;

    let grandTotal = subtotal + vat + serviceCharge;

    document.getElementById("subtotal").innerText =
        subtotal.toFixed(2);

    document.getElementById("vat").innerText =
        vat.toFixed(2);

    document.getElementById("serviceCharge").innerText =
        serviceCharge.toFixed(2);

    document.getElementById("grandTotal").innerText =
        grandTotal.toFixed(2);
}

function updateQuantity(index, value) {

    let quantity = Number(value);

    if (!Number.isInteger(quantity) || quantity < 1) {
        alert("Quantity must be at least 1.");

        displayCart();
        return;
    }

    cart[index].quantity = quantity;

    displayCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    displayCart();
}

function printInvoice() {

    if (cart.length === 0) {
        alert("Please add items to the cart first!");
        return;
    }

    let subtotal = 0;

    let invoiceHTML = `
        <h2>Restaurant Invoice</h2>
        <hr>
        <table>
            <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
            </tr>
    `;

    cart.forEach(function(item) {

        let total = item.price * item.quantity;

        subtotal += total;

        invoiceHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price} Tk</td>
                <td>${item.quantity}</td>
                <td>${total} Tk</td>
            </tr>
        `;
    });

    let vat = subtotal * 0.15;

    let serviceCharge = subtotal * 0.05;

    let grandTotal = subtotal + vat + serviceCharge;

    invoiceHTML += `
        </table>

        <h3>Subtotal: ${subtotal.toFixed(2)} Tk</h3>

        <h3>VAT (15%): ${vat.toFixed(2)} Tk</h3>

        <h3>Service Charge (5%): ${serviceCharge.toFixed(2)} Tk</h3>

        <h2>Grand Total: ${grandTotal.toFixed(2)} Tk</h2>

        <hr>
        <p>Thank you for visiting our restaurant!</p>
    `;

    document.getElementById("invoice").innerHTML = invoiceHTML;

    window.print();
}