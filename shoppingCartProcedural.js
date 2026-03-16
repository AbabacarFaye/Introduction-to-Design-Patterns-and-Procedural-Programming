let cart = []

function addItem(name, price) {
  cart.push({ name, price })
}

function removeItem(name) {
  cart = cart.filter(item => item.name !== name)
}

function getTotal() {
  let total = 0
  for (let item of cart) {
    total += item.price
  }
  return total
}

function displayCart() {
  console.log("Cart items:")
  cart.forEach(item => {
    console.log(`${item.name} - $${item.price}`)
  })
}

addItem("Laptop", 1000)
addItem("Mouse", 50)
addItem("Keyboard", 80)

displayCart()
console.log("Total:", getTotal())

removeItem("Mouse")

displayCart()
console.log("Total:", getTotal())
