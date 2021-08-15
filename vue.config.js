// module.exports = {
//
//   chainWebpack: (config) => {
//     config.resolve.alias
//       .set('assets', '@/assets')
//       .set('components', '@/components')
//   }
// }
module.exports = {
  // lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        assets: '@/assets',
        network: '@/network',
        views: '@/views'
      }
    }
  }
}
