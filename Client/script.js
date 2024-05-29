
// const button = document.querySelector("#search");
// const logoImage = document.querySelector(".refreshLogo");
// const description = document.querySelector("#descriptionID");


// Button EventListener
// button.addEventListener('click', async ()=> {
//     let input = document.querySelector("#searchBar").value;
//     if (input!== ``) {
//         let response = await axios.get(
//             `http://localhost:3001/${input}`
//         )
//         console.log(response.data);
//     }
// });
// // Logo EvenetListener
// logoImage.addEventListener('click', async ()=> {
//     let logo = document.querySelector(".refreshLogo");
//     let response = await axios.get(
//         `http://localhost:3001/${logo}`
//     )
//     console.log(response.data);
    
// });


const handleProductClick = (productId) => {
    // Open description page (popup window) or navigate to another page
    // Replace this with your actual implementation
    // For example, if you want to navigate to a product detail page:
    window.location.href = `/products/${productId}`; // Assuming your product detail page URL follows this pattern
};

const handleLogoClick = () => {
    // Return to home page or refresh the page
    // Replace this with your actual implementation
    // For example, to return to the home page:
    window.location.href = '/'; // Assuming your home page URL is '/'
};


// Define the displayProducts function
const displayProducts = (products) => {
    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p class= "shortDesc">${product.shortDesc}</p>
            <p class="price">$${product.price}</p>
        `;
        productsContainer.appendChild(productElement);
    });
};

// Define the fetchProducts function to fetch products from the backend
const fetchProducts = async () => {
    try {
        const response = await axios.get('http://localhost:3001/products'); // Update the URL
        displayProducts(response.data);
    } catch (error) {
        console.error('Error fetching products:', error.message);
    }
};

// Call the fetchProducts function when the page loads or when needed
fetchProducts();


const fetchAndPopulateData = async () => {
    try {
        // Fetch data from API
        const response = await axios.get('/products');
        const products = response.data;

        // Populate the search box
        const searchBar = document.getElementById('searchBar');
        searchBar.value = ''; // Clear previous value
        
        // Populate products on the page
        const productsContainer = document.querySelector('.products');
        productsContainer.innerHTML = ''; // Clear previous products
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `
                <div class="product">
                    <img src="${product.image}" alt="${product.name}" onclick="handleProductClick('${product._id}')">
                    <h3 onclick="handleProductClick('${product._id}')">${product.name}</h3>
                    <p>Price: $${product.price}</p>
                </div>
            `;
            productsContainer.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching and populating data:', error.message);
    }
};

// // Event listener for search button
// document.getElementById('searchBtn').addEventListener('click', () => {
//     // Handle search button click
//     // You can implement search functionality here
//     console.log('Search button clicked');
// });

// Event listener for logo
// document.querySelector('.refreshLogo').addEventListener('click', handleLogoClick);

// Call fetchAndPopulateData function on page load
// window.onload = fetchAndPopulateData;