let products = [];

function addProduct() {

    let name = document.getElementById("productName").value.trim();

    let purchasePrice = Number(
        document.getElementById("purchasePrice").value
    );

    let sellingPrice = Number(
        document.getElementById("sellingPrice").value
    );

    let quantity = Number(
        document.getElementById("quantity").value
    );

    // Input Validation
    if (
        name === "" ||
        document.getElementById("purchasePrice").value === "" ||
        document.getElementById("sellingPrice").value === "" ||
        document.getElementById("quantity").value === "" ||
        purchasePrice < 0 ||
        sellingPrice < 0 ||
        quantity <= 0 ||
        !Number.isInteger(quantity)
    ) {
        alert("Please enter valid product information!");
        return;
    }

    // Calculate product values
    let stockValue = purchasePrice * quantity;

    let revenue = sellingPrice * quantity;

    let profit = (sellingPrice - purchasePrice) * quantity;

    // Create product object
    let product = {
        name: name,
        purchasePrice: purchasePrice,
        sellingPrice: sellingPrice,
        quantity: quantity,
        stockValue: stockValue,
        revenue: revenue,
        profit: profit
    };

    // Add product to array
    products.push(product);

    // Update table
    displayProducts();

    // Clear inputs
    document.getElementById("productName").value = "";
    document.getElementById("purchasePrice").value = "";
    document.getElementById("sellingPrice").value = "";
    document.getElementById("quantity").value = "";
}

function displayProducts() {

    let table = document.getElementById("productTable");

    table.innerHTML = "";

    let totalStockValue = 0;
    let totalRevenue = 0;
    let totalProfit = 0;

    products.forEach(function(product) {

        let row = table.insertRow();

        row.insertCell(0).innerText = product.name;
        row.insertCell(1).innerText = product.purchasePrice;
        row.insertCell(2).innerText = product.sellingPrice;
        row.insertCell(3).innerText = product.quantity;
        row.insertCell(4).innerText = product.stockValue;
        row.insertCell(5).innerText = product.revenue;
        row.insertCell(6).innerText = product.profit;

        totalStockValue += product.stockValue;
        totalRevenue += product.revenue;
        totalProfit += product.profit;
    });

    // Display summary
    document.getElementById("stockValue").innerText =
        totalStockValue;

    document.getElementById("revenue").innerText =
        totalRevenue;

    document.getElementById("profit").innerText =
        totalProfit;
}