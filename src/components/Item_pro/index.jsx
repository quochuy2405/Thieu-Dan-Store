import './styles.scss'
import React from 'react';
import PropTypes from 'prop-types';

index.propTypes = {
    product:PropTypes.object.isRequired,
};

function index(props) {
    const {product}=props;
    return (
        <div className="ItemPro">
            <img src={product.link_img} alt="" className="img_pro" />
            <div className="content">
                <h2 className="title">{product.title}</h2>
                <p className="des">{product.description}</p>
                <p className="price">Giá: {product.price} vnd</p>
            </div>
         
        </div>
    );
}

export default index;