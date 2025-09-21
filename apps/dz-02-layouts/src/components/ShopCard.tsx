import { TShopProductItemParams } from '../types';

export default function ShopCard({ product }: TShopProductItemParams) {
    const cardStyle = {
        backgroundImage: `url('${product.img}')`
    };

    return (
        <div className="shop-card">
            <div className="card-content" style={cardStyle}>
                <div className="card-header">
                    <h2 className="card-name">{product.name}</h2>
                    <span className="card-color">{product.color}</span>
                </div>
                <div className="card-image-placeholder"></div>
                <div className="card-footer">
                    <span className="card-price">${product.price}</span>
                    <button className="add-to-cart-btn">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};