function addToCart() {
    alert('Товар добавлен в корзину!');
}


document.addEventListener("DOMContentLoaded", function() {
    const products = {
        '1': {
            name: "Пример товара 1",
            image: "https://m.media-amazon.com/images/I/71h5B-ZxaWL._AC_UL320_.jpg",
            description: "Это краткое описание первого товара, оно привлекательно и информативно.",
            price: "59.79$"
        },
        '2': {
            name: "Пример товара 2",
            image: "https://m.media-amazon.com/images/I/71FxOYyqK3L._AC_UL320_.jpg",
            description: "Это краткое описание второго товара, оно привлекательно и информативно.",
            price: "28.56$"
        },
        '3': {
            name: "Пример товара 3",
            image: "https://m.media-amazon.com/images/I/71UmBlexW8L._AC_UL320_.jpg",
            description: "Это краткое описание третьего товара, оно привлекательно и информативно.",
            price: "45.51$"
        }
    };

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    function loadProductDetails(productId) {
        const product = products[productId];
        if (product) {
            document.getElementById('productName').textContent = product.name;
            document.getElementById('productDescription').textContent = product.description;
            document.getElementById('productPrice').textContent = 'Цена: ' + product.price;
            document.getElementById('productImage').src = product.image;
            document.getElementById('productImage').alt = product.name;
        } else {
            document.getElementById('productName').textContent = 'Продукт не найден';
            document.getElementById('productDescription').textContent = '';
            document.getElementById('productPrice').textContent = '';
        }
    }

    const productId = getQueryParam('product_id');
    if (productId) {
        loadProductDetails(productId);
    }
});
