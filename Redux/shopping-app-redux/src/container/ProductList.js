import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import ProductComponent from './ProductComponent'
import { fetchProducts } from '../redux/actions/productActions'

const ProductList = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    console.log("Products: ", products)

  return (
    <div className='ui grid container' style={{paddingTop: '60px'}}>
        <ProductComponent/>
    </div>
  )
}

export default ProductList