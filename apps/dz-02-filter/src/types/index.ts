export type TProject = {
    img: string;
    category: string;
};

export type TToolbar = {
    filters: string[];
    selected: string;
    onSelectFilter: (filter: string) => void;
};

export type TProjectList = {
    projects: TProject[];
};

export type TPortfolio = {
    projects: TProject[];
    filters: string[];
};