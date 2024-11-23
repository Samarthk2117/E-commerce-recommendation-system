const products = [
    { id: 1, name: "Smartphone", image: "https://via.placeholder.com/200", price: "$699" },
    { id: 2, name: "Laptop", image: "https://via.placeholder.com/200", price: "$999" },
    { id: 3, name: "Smartwatch", image: "https://via.placeholder.com/200", price: "$199" },
    { id: 4, name: "Headphones", image: "https://via.placeholder.com/200", price: "$149" },
];

const productGrid = document.getElementById("product-grid");

products.forEach(product => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
    `;
    productGrid.appendChild(productDiv);
});
