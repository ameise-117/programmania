module.exports = {
  // .eslintrc.jsが置いてあるディレクトリをルートとするかどうか
  root: true,
  // 環境の指定
  env: {
    browser: true,
    node: true
  },
  // パーサーのオプション指定
  parserOptions: {
    // 構文解析にどれを使うか
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // 追加で判定するコードがある場合はここで指定
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // カスタムルールの追加
  // ref: https://eslint.org/docs/rules/
  // add your custom rules here
  rules: {
    'semi': [2, 'never'],
    'comma-dangle': ['error', 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        'printWidth': 200,
        'trailingComma': 'none',
        'singleQuote': true,
        'semi': false
      }
    ]
  }
}
