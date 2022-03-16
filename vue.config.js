const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// module.exports = defineConfig({
//   devServer: {
//     proxy: {
//       '/api': {
//       // detail: https://cli.vuejs.org/config/#devserver-proxy
//         target: `https://grnx.api.storeapi.net`,
//         changeOrigin: true,
//         secure:true,
//         pathRewrite: {
//           '^/api' : ''
//         }
//       }
//     }
// }
// }) 

// module.exports = {
//   plugins: [
//     ['import', {
//       libraryName: 'vant',
//       libraryDirectory: 'es',
//       style: true
//     }, 'vant']
//   ]
// };