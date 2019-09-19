module.exports = {
    devServer: {
      open: true,
      host: '0.0.0.0',
      port: 8080,
      https: false,
      hotOnly: false,
      proxy: {
        // 配置跨域
        '/api': {
          target: 'https://ele-interface.herokuapp.com/api/',
          ws: true,
          changOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/base': {
          target: 'http://106.75.137.205:8081',
          // ws: true,
          changOrigin: true, // 跨域
          pathRewrite: {
            '^/base': '/api'
          }
        }
      },
      before: app => {}
    }
  };
  