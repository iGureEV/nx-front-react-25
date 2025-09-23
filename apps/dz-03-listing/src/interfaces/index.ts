export interface IMainImage {
    url_75x75: string,
    url_170x135: string,
    url_570xN: string,
    url_fullxfull: string,
}

export interface IListItem {
    url?: string,
    MainImage?: IMainImage,
    title?: string,
    currency_code?: string,
    price?: string,
    quantity?: number,
    listing_id: number,
    state: string,
};

export interface IListItemProps {
    item: IListItem,
};

export interface IListingProps {
    items: IListItem[],
};
