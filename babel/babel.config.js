module.exports = {
  presets: [
    [
      require('@babel/preset-env'),
      {
        corejs: 3,
        useBuiltIns: 'usage',
        targets: {
          android: '4.0',
          ios: '8.0'
        }
      }
    ]
  ],
  plugins: [
    [
      require('@babel/plugin-transform-runtime'),
      {
        corejs: false
      }
    ]

  ],
}
