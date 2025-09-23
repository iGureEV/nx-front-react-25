import { IDropdownListProps } from '../../interfaces';
import DropdownItem from '../DropdownItem/DropdownItem';

export default function DropdownList ({ items, isOpen, onItemClick }: IDropdownListProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <ul className="dropdown">
            {items.map((item, index) => (
                <DropdownItem 
                    key={index}
                    item={item}
                    onItemClick={onItemClick}
                />
            ))}
        </ul>
    );
};
