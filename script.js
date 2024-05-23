let cart = [];

function addToCart(name, price, quantity) {
    const product = {
        name: name,
        price: price,
        quantity: quantity
    };
    cart.push(product);
    alert(`${name} added to cart`);
}

function viewOrders() {
    let orderDetails = '';
    cart.forEach(item => {
        orderDetails += `Product: ${item.name}, Quantity: ${item.quantity}, Price: $${item.price}\n`;
    });
    localStorage.setItem('orders', orderDetails);
    window.location.href = 'orders.html';
}

function searchProducts() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const products = document.getElementsByClassName('product');
    Array.from(products).forEach(product => {
        const name = product.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (name.includes(query)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}
