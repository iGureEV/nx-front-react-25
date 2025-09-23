import { useState } from 'react';
import { TPortfolio, TProject } from '../../types';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';
import './Portfolio.css';

export default function Portfolio ({ projects, filters }: TPortfolio) {
    const [activeFilter, setActiveFilter] = useState<string>('All');

    const allFilters: string[] = ['All', ...filters];

    const handleSelectFilter = (filter: string): void => {
        setActiveFilter(filter);
    };

    const filteredProjects: TProject[] = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="portfolio">
            <Toolbar
                filters={allFilters}
                selected={activeFilter}
                onSelectFilter={handleSelectFilter}
            />
            <ProjectList projects={filteredProjects} />
        </div>
    );
};
