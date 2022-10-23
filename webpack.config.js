const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'public/js'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                            ],
                        },
                    },
                ],
            },
        ],
    },
    target: ["web", "es5"],
};
