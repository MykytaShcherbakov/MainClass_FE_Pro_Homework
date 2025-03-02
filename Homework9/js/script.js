document.getElementById('fetch-product').addEventListener('click', () => {
    const productId = document.getElementById('product-id').value;
    if (productId) {
        getProductByID(productId, updateProductCard);
    }
});

function getProductByID(id, callback) {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error("Ошибка загрузки данных:", error));
}

function updateProductCard(product) {
    document.getElementById('product-card').style.display = 'block';
    document.getElementById('product-img').src = product.thumbnail;
    document.getElementById('product-title').textContent = product.title;
    document.getElementById('product-stock').textContent = product.stock;
    document.getElementById('product-price').textContent = product.price;
    document.getElementById('product-category').textContent = product.category;

    let avgRating = product.rating || 0;
    document.getElementById('product-rating').textContent = avgRating.toFixed(1);
}
