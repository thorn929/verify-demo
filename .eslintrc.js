/*
 * @Author: zcy
 * @Date: 2020-05-11 16:02:29
 * @LastEditTime: 2020-06-04 20:12:36
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
  // extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
  // parserOptions: {
  //   parser: 'babel-eslint'
  // },
  // rules: {
  //   'prettier/prettier': 'error',
  //   'no-console': process.env.NODE_ENV == 'production' ? 'warn' : 'off',
  //   'no-debugger': process.env.NODE_ENV == 'production' ? 'warn' : 'off'
  //   // 强制执行一致的缩进
  //   // 'indent': ['error', 2],
  //   // // 强制在块之前使用一致的空格
  //   // 'space-before-blocks': "error",
  //   // // 强制块的开头结尾使用空白行
  //   // 'padded-blocks': ["error", "never"],
  //   // // 强制关键字周围空格的一致性 if、function 等
  //   // 'keyword-spacing': ["error", { "before": true , "after": false}],
  //   // // 要求在运算符之间加空格
  //   // 'space-infix-ops': 1,
  //   // // 强制在对象字面量的键和值之间使用一致的空格
  //   // 'key-spacing': ["error", { "beforeColon": false, "afterColon": true }],
  // }

  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  // plugins: ['vue', 'prettier'],
  rules: {
    // 'no-console': 0,
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     singleQuote: true,
    //     trailingComma: 'none',
    //     bracketSpacing: true,
    //     jsxBracketSameLine: true,
    //   },
    // ],
  }
}
