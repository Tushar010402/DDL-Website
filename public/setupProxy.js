const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://backend.dangsccg.co.in',  // Your Django development server
            changeOrigin: true,
        })
    );
};
