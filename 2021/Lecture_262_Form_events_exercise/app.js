const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let product = form.elements.product;
    let qty = form.elements.qty;
    createListEntry(qty, product);
});

const createListEntry = (qty, product) => {
    let listItem = document.createElement('li');
    listItem.innerText = `${qty.value} ${product.value}`;
    document.querySelector('ul').appendChild(listItem);
    product.value = '';
    qty.value = '';
};
