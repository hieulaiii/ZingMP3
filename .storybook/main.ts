const viteTsconfig = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfig.default;
const { mergeConfig } = require('vite');

module.exports = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite',
    },
    features: {
        storyStoreV7: true,
    },
    typescript: {
        reactDocgenTypescriptOptions: {
            skipChildrenPropWithoutDoc: true,
            shouldExtractLiteralValuesFromEnum: true,
            shouldRemoveUndefinedFromOptional: true,
            propFilter: (prop) => {},
        },
    },
    async viteFinal(config) {
        return mergeConfig(
            {
                ...config,
                define: {
                    ...config.define,
                    global: 'window',
                },
            },
            {
                plugins: [tsconfigPaths()],
            }
        );
    },
};
