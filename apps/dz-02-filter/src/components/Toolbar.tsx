import { TToolbar } from '../types';

export default function Toolbar ({ filters, selected, onSelectFilter }: TToolbar) {
    return (
        <div className="toolbar">
            {filters.map(filter => (
                <button
                    key={filter}
                    className={`toolbar-btn ${selected === filter ? 'active' : ''}`}
                    onClick={() => onSelectFilter(filter)}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};
