const ShoppingCart = (function () {

  let cart = []

  function addItem(name, price) {
    cart.push({ name, price })
  }

  function removeItem(name) {
    cart = cart.filter(item => item.name !== name)
  }

  function getTotal() {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  function displayCart() {
    console.log("Cart items:")
    cart.forEach(item => {
      console.log(`${item.name} - $${item.price}`)
    })
  }

  return {
    addItem,
    removeItem,
    getTotal,
    displayCart
  }

})()
