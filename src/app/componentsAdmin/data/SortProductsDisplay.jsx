"use client"
import React from 'react'
import ProductsCardAdmin from '../ProductsCardAdmin';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SortProductsDisplay = ({ isCart = false }) => {

    const { data, error, isLoading } = useSWR("/api/product/sort", fetcher, { refreshInterval: 1 });

    if (error) {
        return (<> Error </>);
    }

    if (isLoading) {
        return (<> wait , Data is on the Way.... </>);
    }

    if (!data) {
        return (<> data not found </>);
    }

    let sortedProducts = data.readptModels2.sort((a, b) => { return a.id - b.id; });
    let catPtoducts = sortedProducts.filter(item => item.isAddedToCart == true);



    if (isCart == false) {
        return (
            <>
                {sortedProducts.map((curItem, index) => {
                    return (
                        <>
                            <ProductsCardAdmin key={index}
                                {...curItem}>
                            </ProductsCardAdmin>
                        </>
                    )
                })}
            </>
        )

    }


    if (isCart == true) {
        return (
            <>
                {
                    catPtoducts.map((curItem, index) => {
                        return (
                            <ProductsCardAdmin key={index}
                                {...curItem}>
                            </ProductsCardAdmin>
                        )
                    })}
            </>
        )

    }

   
}

export default SortProductsDisplay