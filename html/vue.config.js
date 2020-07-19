module.exports = {
  devServer: {
  	proxy: {
      '/api': {
        target: 'http://192.168.0.197',
        ws: true,
        changeOrigin: true
      }
    }
  }  
}