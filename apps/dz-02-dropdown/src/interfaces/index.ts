export interface IMenuItem {
    label: string;
    value: string;
};

export interface IDropdownItemProps {
    item: IMenuItem;
    onItemClick: (item: IMenuItem) => void;
}

export interface IDropdownListProps {
    items: IMenuItem[];
    isOpen: boolean;
    onItemClick: (item: IMenuItem) => void;
}

export interface IDropdownProps {
    buttonText: string;
    items: IMenuItem[];
    onItemClick?: (item: IMenuItem) => void;
}
