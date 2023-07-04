export default {
    dva: {
        immer: true,//dva-immertable 直接改数据,可以返回新的数据
        hmr: false,
    },
    proxy: {
        '/api': {
            'target': 'http://jsonplaceholder.typicode.com/',
            'changeOrigin': true,
            'pathRewrite': { '^/api': '' },
        },
    },

}