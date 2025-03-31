document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    updateCart();

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            const img = button.getAttribute('data-img');

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, img, quantity: 1 });
            }

            saveCart();
            updateCart();
        });
    });

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;
        cart.forEach(item => {
            subtotal += item.price * item.quantity;
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">Remove</button>
                    </div>
                </div>`;
        });

        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${(subtotal + 2.99).toFixed(2)}`;

        document.querySelectorAll('.quantity-btn.minus').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const item = cart.find(i => i.id === id);
                if (item.quantity > 1) {
                    item.quantity -= 1;
                } else {
                    cart = cart.filter(i => i.id !== id);
                }
                saveCart();
                updateCart();
            });
        });

        document.querySelectorAll('.quantity-btn.plus').forEach(button => {
            button.addEventListener('click', () => {
                const id = button.getAttribute('data-id');
                const item = cart.find(i => i.id === id);
                item.quantity += 1;
                saveCart();
                updateCart();
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', () => {
                cart = cart.filter(i => i.id !== button.getAttribute('data-id'));
                saveCart();
                updateCart();
            });
        });
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
});
