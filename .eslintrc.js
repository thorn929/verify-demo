/*
 * @Author: zcy
 * @Date: 2020-05-11 16:02:29
 * @LastEditTime: 2020-06-08 11:10:33
 * @LastEditors: zcy
 * @Description: eslint 配置
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': process.env.NODE_ENV == 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV == 'production' ? 'warn' : 'off'
  }
}
