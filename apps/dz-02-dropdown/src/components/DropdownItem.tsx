import { useState } from 'react';
import { IDropdownItemProps } from '../interfaces';

export default function DropdownItem ({ item, onItemClick }: IDropdownItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onItemClick(item);
    };

    return (
        <li
            className={isHovered ? 'active' : ''}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <a href="#">
                {item.label}
            </a>
        </li>
    );
};
