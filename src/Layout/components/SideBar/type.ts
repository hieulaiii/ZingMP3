export type ActivePage =
    | 'profile'
    | 'discover'
    | 'zingChart'
    | 'radio'
    | 'monitor'
    | 'newMusic'
    | 'category'
    | 'top100'
    | 'mv';

export interface SiteMaps {
    key: ActivePage;
    icon: React.ReactElement;
    text: string;
    click: () => void;
    isShowLive?: boolean;
}
