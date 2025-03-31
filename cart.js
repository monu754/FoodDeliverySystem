document.addEventListener('DOMContentLoaded', function () {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');
    const checkoutBtn = document.getElementById('checkout-btn');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayCartItems() {
        if (cart.length === 0) {
            cartItemsList.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Your cart is empty</p>
                    <a href="menu.html" class="btn-primary">Browse Menu</a>
                </div>
            `;
            cartSubtotal.textContent = '₹0';
            cartTotal.textContent = '₹30';
            cartCount.textContent = '0';
            return;
        }

        let subtotal = 0;
        cartItemsList.innerHTML = cart.map(item => {
            subtotal += item.price * item.quantity;
            return `
                <div class="cart-item" data-id="${item.id}">
                    <div class="item-img">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="item-details">
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-price">₹${item.price} × ${item.quantity}</p>
                        <div class="item-actions">
                            <button class="remove-item"><i class="fas fa-trash"></i> Remove</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        cartSubtotal.textContent = `₹${subtotal}`;
        cartTotal.textContent = `₹${subtotal + 30}`;
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    }

    cartItemsList.addEventListener('click', function (e) {
        const itemElement = e.target.closest('.cart-item');
        if (!itemElement) return;
        const itemId = itemElement.dataset.id;

        if (e.target.closest('.remove-item')) {
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
        }
    });

    checkoutBtn.addEventListener('click', function () {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add items before checkout.');
            return;
        }

        const street = document.getElementById('street').value.trim();
        const city = document.getElementById('city').value.trim();
        const pin = document.getElementById('pin').value.trim();

        if (!street || !city || !pin) {
            alert('Please fill in all address fields before checkout.');
            return;
        }

        checkoutBtn.disabled = true;
        checkoutBtn.textContent = 'Processing...';

        setTimeout(() => {
            alert('Order placed successfully! Thank you for your purchase.');
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCartItems();
            checkoutBtn.disabled = false;
            checkoutBtn.textContent = 'Proceed to Checkout';

            document.getElementById('street').value = '';
            document.getElementById('city').value = '';
            document.getElementById('pin').value = '';
        }, 2000);
    });

    displayCartItems();
});