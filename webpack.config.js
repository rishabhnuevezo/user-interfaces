'use strict';

const { merge } = require('webpack-merge');

module.exports = (config) => {
    const purge = (config.mode === 'production' || config.mode === 'staging');
    const tailwindConfig = require('./tailwind.config.js')(purge);

    return merge(config, {
        module: {
            rules: [
                {
                    test: /\.s?css$/,
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            syntax: 'postcss-scss',
                            plugins: [
                                require('postcss-import'),
                                require('postcss-nested'),
                                require('postcss-custom-properties'),
                                require('@tailwindcss/jit')(tailwindConfig),
                                require('autoprefixer'),
                            ],
                        },
                    },
                },
            ],
        },
    });
};
