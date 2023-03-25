import React from 'react';

import { ReactComponent as DownLoad } from '@/assets/icons/common/windowDownload.svg';
import { Text } from '@/components/common/Element';
import { Button, ButtonIcon, Icon } from '@/components/common/interaction';
import { Container } from '@/components/common/Layout';

import { FormSearch } from './components';

export const Header: React.FC = () => (
    <header tw="fixed z-10 top-0 w-[calc(100vw - 240px - 6px)] flex h-[70px] bg-layout-header px-[60px]">
        <Container tw="items-center justify-between w-full">
            <Container tw="gap-5">
                <Button tw="text-whiteAlpha-50 p-0" variant="link">
                    <Icon icon="ic-back" size={22} />
                </Button>
                <Button tw="text-whiteAlpha-50 p-0" variant="link">
                    <Icon icon="ic-forward" size={22} />
                </Button>
                <FormSearch />
            </Container>
            <Container tw="gap-3">
                <Button variant="secondary" borderRadius="full" tw="h-10 gap-1">
                    <DownLoad />
                    <Text tw="text-textColor-linkHover font-bold">Tải bản Windows</Text>
                </Button>
                <ButtonIcon
                    content="Nâng cấp vip"
                    icon="ic-20-VIP-2"
                    tw="text-icon-setting"
                    size="large"
                    fontSize={20}
                />
                <ButtonIcon
                    content="Cài đặt"
                    icon="ic-settings"
                    tw="text-icon-setting"
                    size="large"
                    fontSize={20}
                />
                <Button variant="primary" borderRadius="full" tw="h-10">
                    <Text tw="font-bold">Đăng nhập</Text>
                </Button>
            </Container>
        </Container>
    </header>
);
