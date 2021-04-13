/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')
const modules = fs.readdirSync(path.join(__dirname, 'src')).map((value) => {
  return path.basename(value, path.extname(value))
})
console.log('modules :: ', modules)

module.exports = {
  presets: ['react-app'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: modules.reduce(
          (prev, cur) => ({
            ...prev,
            [cur]: `./src/${cur}`,
          }),
          {},
        ),
      },
    ],
  ],
}
