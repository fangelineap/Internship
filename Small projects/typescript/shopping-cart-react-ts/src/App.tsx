import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"

import { useState } from "react"

function App() {

  const [viewCart, setViewCart] = useState<boolean>(false)

  const pageContent = viewCart ? <Cart></Cart> : <ProductList></ProductList>
  
  const content = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart}></Header>
      {pageContent}
      <Footer viewCart={viewCart}></Footer>
    </>
  )

  return content
}

export default App