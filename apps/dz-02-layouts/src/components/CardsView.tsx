import { TShopProductListParams } from '../types';
import ShopCard from './ShopCard';

export default function CardsView({ products }: TShopProductListParams) {
    return (
        <div className="cards-view">
            {products.map((product, index) => (
                <ShopCard key={index} product={product} />
            ))}
        </div>
    );
};
