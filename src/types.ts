export type Tab = {
    route: string;
    title: string;
    index: number;
    id: string;
    sections?: Section[];
}

export type Section = {
    title: string;
    index: number;
    sectionId: string;
    sideNavId: string;
    hideInSideNav?: boolean;
    ref: React.MutableRefObject<any>;
}