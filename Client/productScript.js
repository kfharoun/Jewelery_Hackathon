// const displayProducts = (products) => {
//     const productsContainer = document.querySelector('.products');
//     productsContainer.innerHTML = ''; // Clear previous products
//     products.forEach(product => {
//         const productElement = document.createElement('div');

// const ProductSchema = require("../Models/product");

        
//         // Create an anchor element for the product
//         const linkElement = document.createElement('a');
//         linkElement.href = `display-products.html?id=${product._id}`; 
//         linkElement.innerHTML = `
//             <img src="${product.image}" alt="${product.name}">
//             <h2>${product.name}</h2>
//             <p class="shortDesc">${product.description}</p>
//             <p class="price">$${product.price}</p>
//         `;

//         // Append the anchor element to the product container
//         productElement.appendChild(linkElement);
        
//         // Append the product container to the products container
//         productsContainer.appendChild(productElement);
//     });
// };

const fetchProductsById = async (productId) => {
    try {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error.message);
        return null;
    }
};

const displayProductById = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search)
        const productId = urlParams.get('id')

        if (productId) {
            const product = await fetchProductsById(productId)
            if (product) {
                const productElement = document.createElement('div')
                productElement.classList.add('product')
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="productImage">
                `;
                
                const productText = document.createElement('div')
                productText.classList.add('productText')
                productText.innerHTML = `
                    <h2>${product.name}</h2>
                    <p class="shortDesc">${product.shortDesc}</p>
                    <p class="price">$${product.price}</p>
                    <p class="desc">${product.description}</p>
                    <button id="addToCartButton">Add to Cart</button>
                `;

                productElement.appendChild(productText)
                
                const productsContainer = document.querySelector('.product-details')
                if (productsContainer) {
                    productsContainer.innerHTML = ''
                    productsContainer.appendChild(productElement)
                } else {
                    console.error('Products container not found')
                }
            } else {
                console.error('Product not found')
            }
        } else {
            console.log('URL:', window.location.href)
            console.log('URL Params:', urlParams)
            console.log('Product ID:', productId)
            console.error('Product ID not provided in URL')
        }
    } catch (error) {
        console.error('Error fetching/displaying product:', error.message)
    }
}



const filterProducts = (searchTerm, products) => {
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    displayProducts(filteredProducts)
}


const handleButtonClick = (products) => {
    return () => {
        const searchInput = document.getElementById('searchBar')
        const searchTerm = searchInput.value.trim()
        filterProducts(searchTerm, products)
    }
}

const handleKeyPress = (products) => {
    return (event) => {
        if (event.keyCode === 13) { 
            handleButtonClick(products)()
        }
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('http://localhost:3001/products')
        if (!response.ok) {
            throw new Error('Failed to fetch products')
        }
        const products = await response.json()
        const searchButton = document.getElementById('search')
        const searchInput = document.getElementById('searchBar')

        searchButton.addEventListener('click', handleButtonClick(products))
        searchInput.addEventListener('keypress', handleKeyPress(products))
        const logo = document.querySelector('.refreshLogo')
        logo.addEventListener('click', windowReload)
    } catch (error) {
        console.error('click error:', error.message)
    }
})
document.addEventListener('DOMContentLoaded', () => {
    displayProductById();
})
const windowReload = () => window.location.href = "/Client/index.html";

