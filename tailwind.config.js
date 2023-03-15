module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            white: 'var(--white)',
            black: 'var(--black)',
            yellow: 'var(--yellow)',
            blue: 'var(--blue)',
            green: 'var(--green)',
            gray: 'var(--gray)',
            red: 'var(--red)',
            purple: {
                primary: 'var(--purple-primary)',
            },
            transparent: '#fff0',
            darkAlpha: {
                10: 'var(--dark-alpha-10)',
                50: 'var(--dark-alpha-50)',
                70: 'var(--dark-alpha-70)',
                80: 'var(--dark-alpha-80)',
            },
            whiteAlpha: {
                10: 'var(--white-alpha-10)',
                50: 'var(--white-alpha-50)',
                70: 'var(--white-alpha-70)',
                80: 'var(--white-alpha-80)',
            },
            tooltip: {
                default: 'var(--background-tooltip)',
                hover: 'var(--hover-tooltip-opacity)',
            },
            layout: {
                main: 'var(--layout-bg)',
                header: 'var(--layout-header-bg)',
                sidebarPopup: 'var(--sidebar-popup-bg)',
                primary: 'var(--primary-bg)',
                gradient: 'var(--gradient-latest-section-artist)',
                alpha: 'var(--alpha-layout-bg)',
                player: 'var(--player-bg)',
                sidebar: 'var(--sidebar-bg)',
                progressbar: {
                    active: 'var(--progressbar-active-bg)',
                    player: 'var(--progressbar-player-bg)',
                },
            },
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
                placeholder: 'var(--text-placeholder)',
                linkHover: 'var(--link-text-hover)',
                navigation: 'var(--navigation-text)',
            },
        },
        fontFamily: {
            main: ['Inter', 'sans-serif'],
        },
        boxShadow: {
            contextMenu: '0 2px 5px var(--portal-menu-box-shadow)',
        },
        extend: {
            backgroundImage: {
                logoZing: 'var(--img-logo-mp3)',
                bgSidebar: 'linear-gradient(117deg,#5a4be7,#c86dd7 102%)',
            },
            dropShadow: {
                sidebarText: 'var(--sidebar-drop-shadow-text)',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
};
