const ShoppingCart = (function () {

  let cart = [];

  function addItem(name, quantity, price) {
    cart.push({
      name: name,
      quantity: quantity,
      price: price
    });
  }

  function viewCart() {
    let total = 0;

    console.log("Cart:");

    cart.forEach(item => {
      let itemTotal = item.quantity * item.price;
      total += itemTotal;

      console.log(`${item.name} (x${item.quantity}) - ${itemTotal.toFixed(2)} TND`);
    });

    console.log(`Total: ${total.toFixed(2)} TND`);
  }

  function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
  }

  function clearCart() {
    cart = [];
  }

  return {
    addItem,
    viewCart,
    removeItem,
    clearCart
  };

})();


// Example usage
ShoppingCart.addItem("Apple", 2, 1.5);
ShoppingCart.addItem("Orange", 3, 2.0);

ShoppingCart.viewCart();

ShoppingCart.removeItem("Apple");

ShoppingCart.viewCart();
