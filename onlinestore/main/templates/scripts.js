document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: 'Product 1',
            image: 'product1.jpg',
            price: 19.99,
            quantity: 0
        },
        {
            name: 'Product 2',
            image: 'product2.jpg',
            price: 29.99,
            quantity: 0
        },
        {
            name: 'Product 3',
            image: 'product3.jpg',
            price: 24.99,
            quantity: 0
        }
    ];

    const productListDiv = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productDiv.appendChild(productImage);

        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');

        const productName = document.createElement('div');
        productName.classList.add('product-name');
        productName.textContent = product.name;
        productInfoDiv.appendChild(productName);

        const productPrice = document.createElement('div');
        productPrice.classList.add('product-price');
        productPrice.textContent = `$${product.price.toFixed(2)}`;
        productInfoDiv.appendChild(productPrice);

        const productQuantity = document.createElement('div');
        productQuantity.classList.add('product-quantity');
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = product.quantity;
        quantityInput.min = 0;
        quantityInput.addEventListener('change', function(e) {
            product.quantity = parseInt(e.target.value);
        });
        productQuantity.appendChild(quantityInput);
        productInfoDiv.appendChild(productQuantity);

        productDiv.appendChild(productInfoDiv);
        productListDiv.appendChild(productDiv);
    });
});
