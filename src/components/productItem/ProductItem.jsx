import React from 'react';
import './productStyle.css'

/// Component for Product Item
let ProductItem = (props) => {
    console.log(props.imgUrl)
    return (
        <div className={'productItem'}>
            <img src={props.imageUrl} alt={'no img'}></img>
            <p>{props.name}</p>
            <p>{props.count}</p>
            <p>{props.description}</p>
            <button onClick={props.onClick}>show more</button>
        </div>
    )
}

export default ProductItem;