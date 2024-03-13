document.addEventListener('DOMContentLoaded', function() {
    // Example cart data
    let cart = [
        { name: 'Medicine A', price: 20 },
        { name: 'Medicine B', price: 30 }
    ];

    function updateCart() {
        const cartItemsElement = document.getElementById('cart-items');
        cartItemsElement.innerHTML = ''; // Clear current items
        let totalAmount = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - $${item.price}`;
            cartItemsElement.appendChild(itemElement);
            totalAmount += item.price;
        });
        document.getElementById('total-amount').textContent = `$${totalAmount}`;
    }

    document.getElementById('checkout-btn').addEventListener('click', function() {
        // Show review section
        document.getElementById('review-section').classList.remove('hidden');
    });

    document.getElementById('submit-review').addEventListener('click', function() {
        const reviewText = document.getElementById('review-text').value;
        console.log('Review submitted:', reviewText);
        // Here, you'd typically send the review to the server
        alert('Thank you for your review!');
        // Optionally, clear the review text area
        document.getElementById('review-text').value = '';
    });

    updateCart(); // Initial cart update
});
