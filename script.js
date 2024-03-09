const main = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');

function fetchProducts(url) {
  main.innerHTML = ''; // Clear existing products

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      json.forEach((item) => {
        const product = document.createElement('div');
        const image = document.createElement('div');
        const img = document.createElement('img');
        const row = document.createElement('div');
        const title = document.createElement('h5');
        const colomn = document.createElement('div');
        const price = document.createElement('p');
        const span = document.createElement('span');
        span.innerHTML = '<i class="fa fa-heart"></i>';

        // class Names
        product.className = 'item';
        image.className = 'image';
        row.className = 'row';
        title.className = 'title';
        colomn.className = 'colomn';
        price.className = 'price';
        span.className = 'favour';

        // Show on the HTML
        img.src = item.image;
        title.textContent = item.title;
        price.textContent = `$ ${item.price}`;

        // Appending
        image.appendChild(img);
        row.appendChild(title);
        row.appendChild(colomn);
        colomn.appendChild(price);
        colomn.appendChild(span);
        product.appendChild(image);
        product.appendChild(row);
        main.appendChild(product);

        product.addEventListener('click', function () {
          // Redirect to the detail page with the product ID or other relevant details
          window.location.href = `detail.html?id=${item.id}`;
        });
      });
    })
    .catch((error) => console.error('Error fetching data:', error));
}

// Initial fetch with 'All' category
fetchProducts('https://fakestoreapi.com/products');

categoryFilter.addEventListener('change', function () {
  var selectedValue = this.value;

  const url =
    selectedValue === 'all'
      ? 'https://fakestoreapi.com/products'
      : `https://fakestoreapi.com/products/category/${selectedValue}`;

  fetchProducts(url);
});
