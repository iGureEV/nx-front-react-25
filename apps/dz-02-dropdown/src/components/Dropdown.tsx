import { useState } from 'react';
import { IDropdownProps, IMenuItem } from '../interfaces';
import DropdownList from './DropdownList';

export default function Dropdown({ buttonText, items, onItemClick }: IDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item: IMenuItem) => {
        setIsOpen(false);

        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div className={`dropdown-wrapper ${isOpen ? 'open' : ''}`}>
            <button className="btn"  onClick={toggleDropdown}>
                <span>{buttonText}</span>
                <i className="material-icons">public</i>
            </button>
            
            <DropdownList items={items} isOpen={isOpen} onItemClick={handleItemClick} />
        </div>
    );
};