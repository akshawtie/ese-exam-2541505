import { useState } from "react"
import "./ShopiingCart.css";
function ShoppingCart() {
  const products = [
    { id: 1, name: "Keyboard", price: 2000 },
    { id: 2, name: "Mouse", price: 800 },
    { id: 3, name: "Headphones", price: 3000 }
  ]
  const [cart, setCart] = useState([])
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item))
    } else {
      setCart([...cart, { ...product, qty: 1 }])
    }
  }
  function removeFromCart(id) {
    const existing = cart.find(item => item.id === id)
    if (existing.qty > 1) {
      setCart(cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item))
    } else {
      setCart(cart.filter(item => item.id !== id))
    }
  }
  function clearCart() {
    alert(`Checked out with total ₹${cart.reduce((sum, item) => sum + item.price * item.qty, 0)}`)
    setCart([])
  }
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  return (
    <div>
      <h1>Simple Shop</h1>
      <h2>Products</h2>
      <div className="cart-items">
      {products.map(product => (
        <div key={product.id} className="cart-item">
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}</div>
      <hr />
      <h2>Cart</h2>
      {cart.length === 0 && <p>Cart is empty</p>}
      {cart.map(item => (
        <p key={item.id}> 
          {item.name} - ₹{item.price} x {item.qty}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </p>
      ))}
      <h3>Total: ₹{total}</h3>
      <button onClick={clearCart}>Checkout</button>
    </div>
  )
}
export default ShoppingCart