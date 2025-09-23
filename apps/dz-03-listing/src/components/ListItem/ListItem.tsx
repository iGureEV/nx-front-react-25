import { IListItemProps } from '../../interfaces';
import { truncateTitle, formatPrice, getQuantityLevel } from '../../utils';
import './ListItem.css';

export default function ListItem({ item }: IListItemProps) {
    const { listing_id, url, MainImage, title, currency_code, price, quantity } = item;

    return (
        <div className="item" key={listing_id}>
            <div className="item-image">
                <a href={url}>
                    {MainImage && MainImage.url_570xN ? (
                        <img src={MainImage.url_570xN} alt={item.title} />
                    ) : (
                        <div className="item-image-placeholder">
                            <i className="material-symbols-outlined">
                                indeterminate_question_box
                            </i>
                        </div>
                    )}
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{truncateTitle(title)}</p>
                <p className="item-price">{formatPrice(price, currency_code)}</p>
                <p className={`item-quantity ${getQuantityLevel(quantity)}`}>
                    {quantity ?? 0} left
                </p>
            </div>
        </div>
    );
}