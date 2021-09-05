const plugins = [
  'react-hot-loader/babel',
  '@babel/plugin-proposal-class-properties'
]

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins
}
