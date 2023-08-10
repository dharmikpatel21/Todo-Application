module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    parser: '@babel/eslint-parser',
    extends: ['airbnb', 'prettier'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    ignorePatterns: ['dist'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
    },
    rules: {
        'import/no-extraneous-dependencies': 0,
    },
    plugins: ['@babel'],
};
