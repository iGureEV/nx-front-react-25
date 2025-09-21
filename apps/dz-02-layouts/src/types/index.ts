export type TProduct = {
    name: string;
    price: string;
    color: string;
    img: string;
};

export type TViewMode = 'cards' | 'list';


export type TShopProductListParams = {
    products: TProduct[];
};

export type TShopProductItemParams = {
    product: TProduct;
};

export type TIconParams = {
    icon: 'view_list' | 'view_module';
    onSwitch: () => void;
};
