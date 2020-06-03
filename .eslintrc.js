/*
 * @Author: zcy
 * @Date: 2020-05-11 16:02:29
 * @LastEditTime: 2020-06-03 14:47:53
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
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': ['error', 2]
  }
}
