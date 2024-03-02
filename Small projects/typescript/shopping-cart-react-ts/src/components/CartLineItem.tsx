import { ChangeEvent, ReactElement, memo } from "react";
import { CartItemType } from "../contexts/CartProvider";
import { ReducerAction, ReducerActionType } from "../contexts/CartProvider";

type PropsType = {
    item: CartItemType;
    dispatch: React.Dispatch<ReducerAction>;
    REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
    const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url).href;

    const lineTotal: number = (item.qty * item.price)

    const highestQuantity: number = 20 > item.qty ? 20 : item.qty

    const optionValues: number[] = [ ...Array(highestQuantity).keys()]
    .map(i => i + 1)

    const options: ReactElement[] = optionValues.map(val => {
        return <option key={`opt${val}`} value={val}>
            {val}
        </option>
    })

    const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch({
            type: REDUCER_ACTIONS.QTY,
            payload: { ...item, qty: Number(e.target.value) }
        })
    }

    const onRemoveFromCart = () => dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item
    })

    const content = (
        <li className="cart__item">
            <img className="cart__img" src={img} alt={item.name} />
            <div aria-label="Item Name">{item.name}</div>
            <div aria-label="Price Per Item">{
                new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}). format
                (item.price)
            }</div>

            <label className="offscreen" htmlFor="itemQty">
                Item Quantity:
            </label>
            <select className="cart__select" name="itemQty" id="itemQty"
            value={item.qty} aria-label="Item Quantity" onChange={onChangeQty}>
                {options}
            </select>

            <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}). format
                (lineTotal)}
            </div>

            <button className="cart__button" aria-label="Remove Item From Cart"
            title="Remove Item From Cart" onClick={onRemoveFromCart}>
                X
            </button>
        </li>
    )
    
    return content
};

function areItemsEqual ( { item: prevItem }: PropsType, { item: nextItem }: PropsType) {
    return Object.keys(prevItem).every(key => {
        return prevItem[key as keyof CartItemType] === nextItem[key as keyof CartItemType]
    })
}

const MemoizedCartLineItem = memo<typeof CartLineItem>(CartLineItem, areItemsEqual)


export default MemoizedCartLineItem;