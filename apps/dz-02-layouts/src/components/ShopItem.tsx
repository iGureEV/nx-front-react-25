import { TShopProductItemParams } from '../types';

export default function ShopItem({ product }: TShopProductItemParams) {
    return (
        <div className="shop-item">
            <div className="item-image">
                <img src={product.img} alt={product.name} />
            </div>
            <div className="item-name">{product.name}</div>
            <div className="item-color">{product.color}</div>
            <div className="item-price">${product.price}</div>
            <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
    );
};