

// Define the displayProducts function
const displayProducts = (products) => {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        const productElement = document.createElement('div');
        
        // Create an anchor element for the product
        const linkElement = document.createElement('a');
        linkElement.href = `display-products.html?id=${product._id}`; 
        linkElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class="shortDesc">${product.shortDesc}</p>
            <p class="price">$${product.price}</p>
        `;

        // Append the anchor element to the product container
        productElement.appendChild(linkElement);
        
        // Append the product container to the products container
        productsContainer.appendChild(productElement);
    })
}


// Define the fetchProducts function to fetch products from the backend
const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/products'); // Update the URL
        displayProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
}


fetchProducts()


const fetchAndPopulateData = async () => {
    try {
        const response = await axios.get('/products')
        const products = response.data

        
        const searchBar = document.getElementById('searchBar')
        searchBar.value = ''
        
        
        const productsContainer = document.querySelector('.products')
        productsContainer.innerHTML = ''
        products.forEach(product => {
            const productElement = document.createElement('div')
            productElement.innerHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" onclick="handleProductClick('${product._id}')">
                    <h3 onclick="handleProductClick('${product._id}')">${product.name}</h3>
                    <p>Price: $${product.price}</p>
                </div>
            `
            productsContainer.appendChild(productElement)
        })
    } catch (error) {
        console.error('Error fetching and populating data:', error.message)
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

const sortProductsUp = async (order) => {
    try {
        const response = await axios.get('http://localhost:3001/up')
        let sorted = response.data
        displayProducts(sorted)
    } catch (error) {
        console.error(`Error sorting products:`, error.message)
    }
}

const sortProductsDown = async (order) => {
    try {
        const response = await axios.get('http://localhost:3001/down')
        let sorted = response.data
        displayProducts(sorted)
    } catch (error) {
        console.error(`Error sorting products:`, error.message)
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
    const sortButtonUp = document.getElementById('sortButtonUp')
    sortButtonUp.addEventListener('click', () => {
        sortProductsUp('asc')
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const sortButtonDown = document.getElementById('sortButtonDown')
    sortButtonDown.addEventListener('click', () => { 
        sortProductsDown('desc')
    })
})

const windowReload = () => window.location.href = "/Client/index.html"




