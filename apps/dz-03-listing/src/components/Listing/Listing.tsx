import { IListingProps } from '../../interfaces';
import ListItem from '../ListItem/ListItem';

export default function Listing({ items }: IListingProps) {
    const validItems = items.filter(item =>
        item.MainImage?.url_570xN
    );

    return (
        <ul className='item-list'>
            {validItems.map((item) =>
                <ListItem item={item} />
            )}
        </ul>
    )
}