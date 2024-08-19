// Function to add item to cart
function addToCart(button) {
  const product = {
    name: button.dataset.name,
    category: button.dataset.category,
    price: parseFloat(button.dataset.price),
    image: button.dataset.image,
    quantity: parseInt(document.querySelector("#qty").value) || 1,
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProductIndex = cart.findIndex(
    (item) => item.name === product.name
  );

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += product.quantity;
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
}

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      console.log("Hello");
      addToCart(this);
    });
  });
});
