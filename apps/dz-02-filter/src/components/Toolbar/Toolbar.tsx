import { TToolbar } from '../../types';
import './Toolbar.css';

export default function Toolbar ({ filters, selected, onSelectFilter }: TToolbar) {
    return (
        <div className="toolbar">
            {filters.map((filterItem, index) => (
                <button
                    key={index}
                    className={`toolbar-btn ${selected === filterItem ? 'active' : ''}`}
                    onClick={() => onSelectFilter(filterItem)}
                >
                    {filterItem}
                </button>
            ))}
        </div>
    );
};
