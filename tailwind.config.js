const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: ({ colors }) => ({
            inherit: colors.inherit,
            current: colors.current,
            white: 'var(--white)',
            black: 'var(--black)',
            yellow: 'var(--yellow)',
            blue: 'var(--blue)',
            green: 'var(--green)',
            gray: 'var(--gray)',
            red: 'var(--red)',
            icon: {
                setting: 'var(--icon-setting)',
            },
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
                5: 'var(--white-alpha-5)',
                10: 'var(--white-alpha-10)',
                15: 'var(--white-alpha-15)',
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
        }),

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
            keyframes: {
                moveRight: {
                    '0%': { transform: 'translateX(0)', opacity: 1 },
                    '100%': { transform: 'translateX(100%)', opacity: 0 },
                },
                moveLeft: {
                    '0%': { transform: 'translateX(-100%)', opacity: 0 },
                    '100%': { transform: 'translateX(0%)', opacity: 1 },
                },
            },
            animation: {
                moveRight: 'moveRight 500ms linear',
                moveLeft: 'moveLeft 500ms linear ',
                moveRightRevers: 'moveRight 1s linear infinite reverse',
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [
        plugin(
            function ({ matchUtilities, addUtilities, theme, variants }) {
                const values = theme('lineClamp');
                matchUtilities(
                    {
                        'line-clamp': (value) => ({
                            overflow: 'hidden',
                            display: '-webkit-box',
                            '-webkit-box-orient': 'vertical',
                            '-webkit-line-clamp': `${value}`,
                        }),
                    },
                    { values }
                );
                addUtilities(
                    [
                        {
                            '.line-clamp-none': {
                                '-webkit-line-clamp': 'unset',
                            },
                        },
                    ],
                    variants('lineClamp')
                );
            },
            {
                theme: {
                    lineClamp: {
                        1: '1',
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6',
                    },
                },
                variants: {
                    lineClamp: ['responsive'],
                },
            }
        ),
    ],
};
