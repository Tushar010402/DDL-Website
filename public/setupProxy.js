const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.dangsccg.co.in',  // Your Django development server
            changeOrigin: true,
        })
    );
};
