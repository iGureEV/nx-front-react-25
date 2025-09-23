/** Форматирование цены */
export const formatPrice = (price?: string, currencyCode?: string): string => {
    switch (currencyCode) {
        case 'USD':
            return `$${price}`;
        case 'EUR':
            return `€${price}`;
        default:
            return `${price ?? 'FREE'} ${price ? currencyCode ?? '' : ''}`;
    }
};

/** Определение уровня по количеству */
export const getQuantityLevel = (quantity?: number): string => {
    if (Number(quantity) <= 10) {
        return 'level-low';
    }

    if (Number(quantity) <= 20) {
        return 'level-medium';
    }

    return 'level-high';
};

/** Обрезка длинного названия */
export const truncateTitle = (title?: string): string =>
    title
        ? title.length > 50
            ? `${title.slice(0, 50)}...`
            : title
        : '-There is no description-';
