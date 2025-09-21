import { useState } from 'react';
import { TShopProductListParams, TViewMode } from '../types';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

export default function Store({ products }: TShopProductListParams) {
    const [viewMode, setViewMode] = useState<TViewMode>('cards');

    const handleSwitchView = () => {
        setViewMode(prevMode => prevMode === 'cards' ? 'list' : 'cards');
    };

    const iconName = viewMode === 'cards' ? 'view_list' : 'view_module';

    return (
        <div className="store">
            <IconSwitch icon={iconName} onSwitch={handleSwitchView} />
            {viewMode === 'cards' ? (
                <CardsView products={products} />
            ) : (
                <ListView products={products} />
            )}
        </div>
    );
};
