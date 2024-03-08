import { ActionTypes } from "../constants/actionTypes";
import fakeStoreAPI from "../../api/fakeStoreAPI";

// asynchronous
export const fetchProducts = () => async (dispatch) => {
    const response = await fakeStoreAPI.get("/products");
    // dispatch actionnya
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeStoreAPI.get(`/products/${id}`)
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
};
