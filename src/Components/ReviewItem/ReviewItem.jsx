import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product}) => {
    console.log(product);
    const {img,name,price,quantity,id} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <h1>This is Review</h1>
        </div>
    );
};

export default ReviewItem;