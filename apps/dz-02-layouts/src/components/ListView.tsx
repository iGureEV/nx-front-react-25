import { TShopProductListParams } from '../types';
import ShopItem from './ShopItem';

export default function ListView({ products }: TShopProductListParams){
    return (
        <div className="list-view">
            {products.map((product, index) => (
                <ShopItem key={index} product={product} />
            ))}
        </div>
    );
};
