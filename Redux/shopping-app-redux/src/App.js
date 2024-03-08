import "./App.css";
import Header from "./container/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./container/ProductList";
import ProductDetail from "./container/ProductDetail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path="/" exact Component={ProductList} />
                        <Route path="/product/:productId" Component={ProductDetail} />
                        <Route>404 Not Found ;o;</Route>
                    </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
