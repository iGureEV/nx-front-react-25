import { TProjectList } from '../types';

export default function ProjectList({ projects }: TProjectList) {
    return (
        <div className="project-list">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <img src={project.img} alt={project.category} />
                </div>
            ))}
        </div>
    );
};
