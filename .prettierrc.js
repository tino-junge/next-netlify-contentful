module.exports = {
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: true,
  jsxSingleQuote: false,
  printWidth: 100,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '.editorconfig',
      options: {
        parser: 'yaml',
      },
    },
  ],
}
