import { ReactElement, createContext, useMemo, useReducer } from "react";

// tipe dari setiap item yang ada di cart
export type CartItemType = {
    sku: string;
    name: string;
    price: number;
    qty: number;
};

// state dari cart yang berisi array of product (cart item)
type CartStateType = { cart: CartItemType[] };

// initial state
const initCartState: CartStateType = { cart: [] };

// aksi yang dapat dilakukan oleh components
const REDUCER_ACTION_TYPE = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    QTY: "QTY",
    SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

// aksi yang dapat dilakukan berdasarkan reducer action type, payload bs diisi product saat add, remove, atau set qty
export type ReducerAction = {
    type: string;
    payload?: CartItemType;
};

const reducer = (state: CartStateType, action: ReducerAction): CartStateType => {
    switch (action.type) {
        // menambah item pada cart saat belum ada atau sudah ada (dari product list page)
        case REDUCER_ACTION_TYPE.ADD: {
            if (!action.payload) {
                throw new Error("action.payload missing in ADD action");
            }

            const { sku, name, price } = action.payload;

            const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);

            const itemExist: CartItemType | undefined = state.cart.find((item) => item.sku === sku);

            const qty: number = itemExist ? itemExist.qty + 1 : 1;

            return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
        }
        // menghapus item tertentu dari cart
        case REDUCER_ACTION_TYPE.REMOVE: {
            if (!action.payload) {
                throw new Error("action.payload missing in REMOVE action");
            }

            const { sku } = action.payload;

            const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);

            return { ...state, cart: [...filteredCart] };
        }
        // set quantity dari cart berdasarkan qty yg diberikan oleh user
        case REDUCER_ACTION_TYPE.QTY: {
            if (!action.payload) {
                throw new Error("action.payload missing in QUANTITY action");
            }

            const { sku, qty } = action.payload;

            const itemExist: CartItemType | undefined = state.cart.find((item) => item.sku === sku);

            if (!itemExist) {
                throw new Error("Item must exist in order to update quantity");
            }

            const updatedItem: CartItemType = { ...itemExist, qty };

            const filteredCart: CartItemType[] = state.cart.filter((item) => item.sku !== sku);

            return { ...state, cart: [...filteredCart, updatedItem] };
        }
        // clear cart items saat user submit cartnya
        case REDUCER_ACTION_TYPE.SUBMIT: {
            return { ...state, cart: [] };
        }
        default:
            throw new Error("Unidentified reducer action type");
    }
};

const useCartContext = (initCartState: CartStateType) => {
    const [state, dispatch] = useReducer(reducer, initCartState);

    const REDUCER_ACTIONS = useMemo(() => {
        return REDUCER_ACTION_TYPE;
    }, []);

    const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.qty;
    }, 0);

    const totalPrice = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
        state.cart.reduce((prev, cartItem) => {
            return prev + cartItem.qty * cartItem.price;
        }, 0)
    );

    const cart = state.cart.sort((a, b) => {
        // sort berdasarkan id pada sku
        const itemA = Number(a.sku.slice(-4))
        const itemB = Number(b.sku.slice(-4))

        return itemA - itemB
    })

    return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart }
};

export type useCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: useCartContextType = {
    dispatch: () => {},
    REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
    totalItems: 0,
    totalPrice: '',
    cart: []
}

export const CartContext = createContext<useCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
        return (
            <CartContext.Provider value={useCartContext(initCartState)}>
                {children}
            </CartContext.Provider>
        )
}

export default CartContext