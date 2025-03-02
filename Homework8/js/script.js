let product = JSON.parse(localStorage.getItem('product')) || {
    title: "Велосипед",
    count: 10,
    favorite: false
};

document.getElementById('product-title').textContent = product.title;
document.getElementById('count').textContent = product.count;

const favoriteEl = document.getElementById('favorite');
if (product.favorite) favoriteEl.classList.add('active');

document.getElementById('increase').addEventListener('click', () => {
    product.count++;
    updateUI();
});

document.getElementById('decrease').addEventListener('click', () => {
    if (product.count > 0) {
        product.count--;
        updateUI();
    }
});

favoriteEl.addEventListener('click', () => {
    product.favorite = !product.favorite;
    favoriteEl.classList.toggle('active');
    saveToLocalStorage();
});

function updateUI() {
    document.getElementById('count').textContent = product.count;
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('product', JSON.stringify(product));
}


// у меня появилвсь какая то проблема и скрипт не выгружал саму каринку и я в итоге добавил её просто в src в html