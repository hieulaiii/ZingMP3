import React from 'react';

import { useTranslation } from 'react-i18next';

import { ReactComponent as Album } from '@/assets/icons/sideBar/album.svg';
import { ReactComponent as CD } from '@/assets/icons/sideBar/cd.svg';
import { ReactComponent as Chart } from '@/assets/icons/sideBar/chart.svg';
import { ReactComponent as Follow } from '@/assets/icons/sideBar/follow.svg';
import { ReactComponent as MusicNote } from '@/assets/icons/sideBar/music-note.svg';
import { ReactComponent as MV } from '@/assets/icons/sideBar/mv.svg';
import { ReactComponent as Radio } from '@/assets/icons/sideBar/radio.svg';
import { ReactComponent as Star } from '@/assets/icons/sideBar/star.svg';
import { ReactComponent as Category } from '@/assets/icons/sideBar/type.svg';
import { Label, Text } from '@/components/common/Element';
import { Icon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';

import { SideBarCard, SiteItem } from './components';
import { Line, LogoImage, Wrapper } from './styled';
import { ActivePage, SiteMaps } from './type';

export const SideBar: React.FC = () => {
    const { t } = useTranslation('layout');
    const [activePage, setActivePage] = React.useState<ActivePage>('discover' as ActivePage);
    const navigateToActivePage = (newActivePage: ActivePage) => {
        setActivePage(newActivePage);
        console.log(newActivePage);
    };
    const siteMaps: SiteMaps[] = [
        {
            key: 'profile',
            icon: <Album />,
            text: t('individual'),
            click: () => navigateToActivePage('profile'),
        },
        {
            key: 'discover',
            icon: <CD />,
            text: t('discover'),
            click: () => navigateToActivePage('discover'),
        },
        {
            key: 'zingChart',
            icon: <Chart />,
            text: t('zingchart'),
            click: () => navigateToActivePage('zingChart'),
        },
        {
            key: 'radio',
            icon: <Radio />,
            text: t('radio'),
            click: () => navigateToActivePage('radio'),
            isShowLive: true,
        },
        {
            key: 'monitor',
            icon: <Follow />,
            text: t('monitor'),
            click: () => navigateToActivePage('monitor'),
        },
    ];
    const siteMaps2: SiteMaps[] = [
        {
            key: 'newMusic',
            icon: <MusicNote />,
            text: t('newMusic'),
            click: () => navigateToActivePage('newMusic'),
        },
        {
            key: 'category',
            icon: <Category />,
            text: t('category'),
            click: () => navigateToActivePage('category'),
        },
        {
            key: 'top100',
            icon: <Star />,
            text: t('top100'),
            click: () => navigateToActivePage('top100'),
        },
        {
            key: 'mv',
            icon: <MV />,
            text: t('mv'),
            click: () => navigateToActivePage('mv'),
        },
    ];
    return (
        <Wrapper>
            <Container tw="h-[70px] pl-[28px] pr-[25px] items-center flex-shrink-0">
                <LogoImage />
            </Container>
            <Container tw="flex-col flex-shrink-0">
                {siteMaps.map((siteMap) => (
                    <SiteItem {...siteMap} active={activePage === siteMap.key} />
                ))}
            </Container>
            <Line />
            <Container tw="flex-col gap-y-[10px] min-h-[300px] h-full overflow-auto">
                <Container tw="flex-col">
                    {siteMaps2.map((siteMap) => (
                        <SiteItem {...siteMap} active={activePage === siteMap.key} />
                    ))}
                </Container>
                <SideBarCard
                    text={t('text_card_login')}
                    button={
                        <Label
                            text={t('login', { ns: 'common' })}
                            tw="text-white border-white py-[6px] px-[35px] font-semibold drop-shadow-sidebarText"
                        />
                    }
                />
                <SideBarCard
                    tw="bg-bgSidebar"
                    text={t('text_card_vip')}
                    button={
                        <Label
                            text={t('vip_upgrade')}
                            tw="bg-yellow text-black border-transparent py-[6px] px-[35px] 
                           drop-shadow-sidebarText font-bold drop-shadow-sidebarText"
                        />
                    }
                />
            </Container>
            <Container tw="h-[54px] px-7 border-t border-whiteAlpha-10 flex-shrink-0 items-center gap-x-[10px]">
                <Icon icon="ic-add" tw="drop-shadow-sidebarText font-bold" />
                <Text tw="text-sm font-bold drop-shadow-sidebarText">{t('add_new_playlist')}</Text>
            </Container>
        </Wrapper>
    );
};
