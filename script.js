document.addEventListener("DOMContentLoaded",function(){
    const productsList = document.getElementById("productsList");
    const products = [
        { name : "MRF English Willow Bat", price:"Rs.24,999",image:"https://5.imimg.com/data5/UL/KE/MY-15115036/mrf-genius-players-special-virat-kohli-endorsed-english-willow_back.jpg"},
        { name : "ADIDAS Football Shoes",price:"Rs.3,999",image:"https://images.unsplash.com/photo-1612387605830-d452ad0ab7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFkaWRhcyUyMGZvb3RiYWxsfGVufDB8fDB8fHww&w=1000&q=80"},
        { name : "YONEX Badminton Racket",price:"Rs.1,599",image:"https://5.imimg.com/data5/VL/TY/DH/SELLER-65431535/yonex-gr-303-full-cover-badminton-racquet.jpg"},
    ];

    products.forEach((product)=>{
        const productElement = document.createElement("div");
        productElement.className = "product";

        const imageElement = document.createElement("img");
        imageElement.src = product.image;
        imageElement.alt = product.name;

        const nameElement = document.createElement("h3");
        nameElement.textContent = product.name;

        const priceElement = document.createElement("p");
        priceElement.textContent = product.price;

        productElement.appendChild(imageElement);
        productElement.appendChild(nameElement);
        productElement.appendChild(priceElement);

        productsList.appendChild(productElement);
    });

    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");

    scrollToProductsLink.addEventListener("click",function(event){
        event.preventDefault();

        featuredProducts.scrollIntoView({ behaviour:"smooth"});
});
});