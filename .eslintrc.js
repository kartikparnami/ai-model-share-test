module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-template': 'off',
    'object-shorthand': 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'semi': 'off',
    'arrow-parens': 'off',
    'no-unused-vars': 'off',
    'func-names': 'off',
    'quotes': 'off',
    'import/extensions': 'off',
    'no-multi-spaces': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
