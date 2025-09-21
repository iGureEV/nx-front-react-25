/** Описание товара магазина */
export type TItem = {
    brand: string;
    title: string;
    description: string;
    descriptionFull: string;
    price: number;
    currency: string;
}

/** Параметры компонента карточки товара магазина */
export type TItemParam = {
    item: TItem;
}
