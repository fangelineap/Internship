import { ReactElement, createContext, useState, useEffect } from "react";

export type ProductType = {
    sku: string;
    name: string;
    price: number;
};

// fetching form json file, siapkan initial state kosong
// const initState: ProductType[] = [];

// static data, not fetching from json file
const initState: ProductType[] = [
    {
        "sku": "item0001",
        "name": "Widget",
        "price": 9.99
    },
    {
        "sku": "item0002",
        "name": "Premium Widget",
        "price": 19.99
    },
    {
        "sku": "item0003",
        "name": "Deluxe Widget",
        "price": 29.99
    }
]

export type UseProductsContextType = { products: ProductType[] };

const initContextState: UseProductsContextType = { products: [] };

const ProductsContext = createContext<UseProductsContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    // kalau mau fetch productList dari json file
    // useEffect(() => {
    //     const fetchProducts = async (): Promise<ProductType[]> => {
    //         const data = await fetch('http://localhost:3500/products')
    //         .then((res) => res.json()).catch(err => {
    //             if (err instanceof Error) console.log(err.message)
    //         })
    //         return data
    //     }

    //     fetchProducts().then(products => setProducts(products))
    // }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )

}

export default ProductsContext;
